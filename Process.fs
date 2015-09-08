module Process
    open NSoup
    open System.IO
    open System
    open Monads
    open Parse
    open Download

    type ProcessedImages = class
        val originalSources : list<string>
        val filepaths: list<string>
        
        new (original, files) =
            {originalSources = original; filepaths = files}
    end


    type Page = class
        val url : string
        val title : string
        val html : string
        val images : ProcessedImages
        
        new (URL, TITLE, HTML, IMAGES) =
            {url = URL; title = TITLE; html = HTML; images = IMAGES}
    end
    
     
    
    let GetImage (parent : NSoup.Nodes.Element) =
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
        let identifier = title + UUID 
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

