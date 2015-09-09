module Process
    open NSoup
    open System.IO
    open System
    open Monads
    open Parse
    open Download

    type ProcessedImages = class
        (*
            Class that represents the result from processing the images
            Consist of a list of the original sources to be used for downloading
            and a list of filepaths to what should be downloaded
        *)

        //TODO Validate that original sources and filepaths are of the same length
        val originalSources : list<string>
        val filepaths: list<string>
        
        new (original, files) =
            {originalSources = original; filepaths = files}
    end


    type Page = class
        (*
            Class that represents an entire page
            The constructor is useless, constuction is actually handled by
            ProcessPage
        *)
        val url : string
        val title : string
        val html : string
        val UUID : string
        val images : ProcessedImages

        new (URL, TITLE, HTML, IMAGES) as this =
            {url = URL; title = TITLE; html = HTML; UUID = ""; images = IMAGES;}
            then
                this.UUID = Guid.NewGuid().ToString("N").Substring(0, 7)

        member x.GetHTML =
            x.html
    end
    
     
    
    let GetImage (parent : NSoup.Nodes.Element) =
        (*
            Helper function that wraps around Children.Select("img")
        *)
        try
            Some (parent.Children.Select("img"))
        with
        |_ -> None

    let ProcessImages title images =
        (*
            This function is terrible and not pure at all but
            I don't want to make deep copies of everything. So blame
            .net object references.
        *)
        
        //steps
        //Grab the original src, put in list
        //Change the src to what new url would be
        //return list of filepaths
        let originalSources = images |> Seq.toList |> List.map (fun (x : NSoup.Nodes.Element) -> x.Attr("src"))
        let UUID = Guid.NewGuid().ToString("N").Substring(0, 7)
        //title?
        let identifier = UUID 
        let rec loop counter (acc : list<string>) (im : list<NSoup.Nodes.Element>) = 
            if (im = []) then
                acc
            else
                let head = im |> List.head
                let extension = match (Path.GetExtension(head.Attr("src"))) with
                |"" -> ".png"
                |_ -> (Path.GetExtension(head.Attr("src"))) 

                let filename = identifier + (string counter) + extension
            
                head.Attr("src", "../Images/" + filename)
                loop (counter + 1) (("temp/" + filename) :: acc) (List.tail im)

        let filepaths = loop 0 [] (images |> Seq.toList)
        new ProcessedImages(originalSources, filepaths)
                 

    let ProcessPage url =
        (*
            Uses a Maybe monad (defined in Monads.fs) to download the file, get the title,
            get the content, get the parent tag, process the images, and return a new
            Page object.
            If downloading the file, getting the content, or getting the parent tag fails, then
            the entire operation fails
            GetTitle cannot fail and images will default to an empty image source
        *)
        let maybe = new OptionBuilder() 
        
        maybe{
            let! doc = NSoupDownload url
            let title = GetTitle doc
            let! content = FindContent doc
            let! parent = content |> ParentByStringContent
            let imageSources = GetImage parent
            let images = 
                match imageSources with
                |Some x -> ProcessImages title x
                |None -> new ProcessedImages([], [])

            return (new Page(url, title, (parent.Html()), images))
        }

    let DownloadPage (page : Page) =
        
        //Write html
        printfn "Downloading... %s" page.title
        WriteXHTML page.title page.html ("temp/" + page.UUID + ".xhtml")
        //Download images, stuff
        let (images : ProcessedImages) = page.images
        printfn "Downloading images for %s" page.title
        (List.zip images.originalSources images.filepaths) |> List.map (fun x ->
            printfn "Downloading... %s" (fst x)
            match x with
            |(a, b) -> ImageDownload a b)
        


    let ProcessList urls =
        urls |> MaybeMap (fun x -> ProcessPage x)
        //what it does
        //Turns the urls into pages
        //For each page, download the images, write the html,
        //AND DO IT ASYNC
    
