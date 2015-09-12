module Process
    open NSoup
    open System.IO
    open System
    open Monads
    open Parse
    open Download
    open System.Text
    open Epub

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
        val uuid : string
        val images : ProcessedImages

        new (url, title, html, uuid, images) =
            {url = url; title = title; html = html; uuid = uuid; images = images;}
    end
    
     
    
    let GetImage (parent : NSoup.Nodes.Element) =
        (*
            Helper function that wraps around Children.Select("img")
        *)
        try
            Some (parent.Children.Select("img"))
        with
        |_ -> None

    let ProcessImages url title images =
        (*
            This function is terrible and not pure at all but
            I don't want to make deep copies of everything. So blame
            .net object references.
        *)
        
        //steps
        //Grab the original src, put in list
        //Change the src to what new url would be
        //return list of filepaths
        let originalSources = images |> Seq.toList 
                            |> List.map (fun (x : NSoup.Nodes.Element) -> x.Attr("src"))
                            |> List.map (fun (x : string) -> RelativeToAbsolute url x)

        let UUID = Guid.NewGuid().ToString("N").Substring(0, 7)
        //title?
        let identifier = UUID 
        let rec loop counter (acc : list<string>) (im : list<NSoup.Nodes.Element>) = 
            if (im = []) then
                acc
            else
                let head = im |> List.head
                let extension = GetExtension (head.Attr("src"))
                let filename = identifier + (string counter) + extension
            
                head.Attr("src", "../Images/" + filename) |> ignore
                loop (counter + 1) (("temp/OEBPS/Images/" + filename) :: acc) (List.tail im)

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
            let id = Guid.NewGuid().ToString("N")
            let images = 
                match imageSources with
                |Some x -> ProcessImages url title x
                |None -> new ProcessedImages([], [])

            return (new Page(url, title, (parent.Html()), id, images))
        }

    let DownloadPage (page : Page) =
        
        //Create neccesary file structure
        Directory.CreateDirectory "temp" |> ignore
        Directory.CreateDirectory "temp/OEBPS" |> ignore
        Directory.CreateDirectory "temp/OEBPS/Text" |> ignore
        Directory.CreateDirectory "temp/OEBPS/Images" |> ignore
        Directory.CreateDirectory "temp/META-INF" |> ignore

        //Write html
        printfn "Downloading... %s" page.title
        WriteXHTML page.title page.html ("temp/OEBPS/Text/" + page.uuid + ".xhtml")
        //Download images, stuff
        let (images : ProcessedImages) = page.images
        printfn "Downloading images for %s" page.title
        (List.zip images.originalSources images.filepaths) |> List.map (fun x ->
            printfn "Downloading... %s" (fst x)
            match x with
            |(a, b) -> ImageDownload a b)

    let ProcessList urls =
        let pages = urls |> MaybeMap (fun x -> ProcessPage x)
        pmap (fun x -> DownloadPage x) pages |> ignore
        pages 
    
    let EbookFromList title author urls =
        let pages = ProcessList urls
        let book = GetBook |> AddTitle title |> AddAuthor author 
        let html = pages |> List.rev |> List.fold (fun (acc : Book) (page : Page) ->
            acc |> AddHTML ("temp/OEBPS/Text/" + page.uuid + ".xhtml") page.title) book
        let img = pages |> List.fold (fun (acc : Book) (page : Page) ->
            page.images.filepaths |> List.fold (fun ac img ->
                ac |> AddImage img) acc) html
        CreateEpub img
            

        
        //what it does
        //Turns the urls into pages
        //For each page, download the images, write the html,
        //AND DO IT ASYNC
    
