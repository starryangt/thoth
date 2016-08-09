module Epub
    open System.IO
    open System
    open System.IO.Compression
    open Download
    open Cover

    type Chapter =
        val id : string
        val src : string
        val directory : string

        new (id, src, directory) =
            {id = id; src = src; directory = directory;}
    
    type TocItem =
        val playorder : int
        val title : string
        val src : string
        val id : string 

        new (playorder, id, src, title) =
            {playorder = playorder; src = src; id = id; title = title;}

    type ImageData =
        val src : string
        val id : string
        val directory : string

        new (id, src, directory) =
            {src = src; id = id; directory = directory}

    type Book =
        val metadata : Map<string, string>
        val chapters : list<Chapter>
        val toc : list<TocItem>
        val images : list<ImageData>

        new (meta, chapter, tocs, image) =
            {metadata = meta; chapters = chapter; toc = tocs; images = image}
        new (meta, (book : Book)) =
            {metadata = meta; chapters = book.chapters;
            toc = book.toc; images = book.images}
    
    let GetFilepath filepath kind =
        let file = Path.GetFileName(filepath)
        match kind with
        |"image" -> "Images/" + file
        |"html" -> "Text/" + file
        |_ -> "Text/" + file

    let GetBook =

        let emptyMeta = Map.empty.Add("title", "").Add("author", "").Add("publisher", "").Add("cover", "")

        new Book(emptyMeta, [], [], [])

    let AddTitle title (book : Book) =
        new Book(book.metadata.Add("title", title), book)

    let AddAuthor author (book : Book) =
        new Book(book.metadata.Add("author", author), book)

    let AddPublisher publisher (book : Book) = 
        new Book(book.metadata.Add("publisher", publisher), book)

    let AddCover cover (book : Book) = 
        new Book(book.metadata.Add("cover", cover), book)

    let AddHTML filepath title (book : Book) =
        let ID = string (book.chapters |> List.length)
        let play = book.toc |> List.length
        let newChapter = Chapter(ID, GetFilepath filepath "html", filepath)

        let newToc = TocItem(play, ID, GetFilepath filepath "html", title)
        new Book(book.metadata, newChapter :: book.chapters, newToc :: book.toc, book.images)

    let AddImage filepath (book : Book) =
        let ID = Path.GetFileName(filepath)
        let newImage = ImageData(ID, GetFilepath filepath "image", filepath)
        new Book(book.metadata, book.chapters, book.toc, newImage :: book.images)


    let GenerateTOC (book : Book) =
        let head = (sprintf "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\
            <!DOCTYPE ncx PUBLIC \"-//NISO//DTD ncx 2005-1//EN\" \"http://www.daisy.org/z3986/2005/ncx-2005-1.dtd\">\n\
            <ncx xmlns=\"http://www.daisy.org/z3986/2005/ncx/\" version=\"2005-1\">\n\
            <head>\n\
            <meta name=\"dtb:uid\" content=\"urn:uuid:%s\"/>\n\
            <meta name=\"dtb:depth\" content=\"1\"/>\n\
            <meta name=\"dtb:totalPageCount\" content=\"0\"/>\n\
            <meta name=\"dtb:maxPageNumber\" content=\"0\"/>\n\
            </head>\n\
            <docTitle>\n\
            <text>%s</text>\n\
            </docTitle>\n\
            <navMap>" 
            (Guid.NewGuid().ToString("N")) (book.metadata.["title"]))

        let formatBody (toc : TocItem) =
            sprintf "\n    <navPoint id=\"navPoint-%i\" playOrder=\"%i\">\n\
                    <navLabel>\n\
                        <text>%s</text>\n\
                    </navLabel>\n\
                    <content src=\"%s\"/>\n\
                </navPoint>" toc.playorder (toc.playorder + 1) toc.title toc.src

        let entries = book.toc |> List.rev |> List.map formatBody |> List.reduce (+)

        (head + entries + "\n </navMap>\n</ncx>")

    let GenerateContent (book : Book) =
        let head = (sprintf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\n\
            <package xmlns=\"http://www.idpf.org/2007/opf\" unique-identifier=\"BookId\" version=\"2.0\">\n\
            <metadata xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:opf=\"http://www.idpf.org/2007/opf\">\n\
            <dc:identifier id=\"BookId\" opf:scheme=\"UUID\">urn:uuid:%s</dc:identifier>\n\
            <dc:title>%s</dc:title>\n\
            <dc:creator opf:file-as=\"%s\" opf:role=\"aut\">%s</dc:creator>\n\
            <dc:language>English</dc:language>\n\
            <meta content=\"Cover.png\" name=\"cover\"/>\n\
            </metadata>\n\
            <manifest>\n\
            <item href=\"toc.ncx\" id=\"ncx\" media-type=\"application/x-dtbncx+xml\"/>\n\
            <item href=\"Text/Cover.xhtml\" id=\"Cover.xhtml\" media-type=\"application/xhtml+xml\"/>\n"  
            (Guid.NewGuid().ToString("N")) (book.metadata.["title"]) (book.metadata.["author"]) (book.metadata.["author"]))

        let htmlBody = book.chapters |> List.rev |> List.map (fun (x : Chapter) ->
            sprintf "<item href=\"%s\" id=\"i%s\" media-type=\"application/xhtml+xml\"/>\n" x.src x.id) |> List.reduce (+)

        let coverImage = "<item href=\"Images/Cover.png\" id=\"Cover.png\" media-type=\"image/png\"/>\n"

        let imageBody = 
            match book.images with
            |[] -> ""
            |_ -> book.images |> List.map (fun (x : ImageData) ->
                    sprintf "<item href=\"%s\" id=\"i%s\" media-type=\"image/jpeg\"/>\n" x.src x.id) |> List.reduce (+)

        let bodyEnd = "</manifest>\n<spine toc=\"ncx\">\n<itemref idref=\"Cover.xhtml\"/>\n"

        let tocPart = book.toc |> List.rev |> List.map (fun (x : TocItem) ->
            sprintf "<itemref idref=\"i%s\"/>\n" x.id) |> List.reduce (+)

        let foot = "\n</spine>\n<guide>\n<reference href=\"Text/Cover.xhtml\" title=\"Cover\" type=\"cover\"/>\n</guide>\n</package>"

        (head + htmlBody + coverImage + imageBody + bodyEnd + tocPart + foot)

    let WriteMimetype path =
        let mimetype = "application/epub+zip"
        File.WriteAllText(path, mimetype)

    let WriteContainer path =
        let container = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n\
                        <container version=\"1.0\" xmlns=\"urn:oasis:names:tc:opendocument:xmlns:container\">\n\
                        \t<rootfiles>\n\
                        \t\t<rootfile full-path=\"OEBPS/content.opf\" media-type=\"application/oebps-package+xml\"/>\n\
                        \t</rootfiles>\n\
                        </container>"
        File.WriteAllText(path, container)


    let TitleToValidFilename (title : string) =
        let validChars = Path.GetInvalidFileNameChars()
        let processed = title.ToCharArray() |> Array.filter (fun (x : char) -> Array.exists (fun elem -> elem = x) validChars |> not)
        new string(processed)

    let CreateEpub (book : Book) =

        let title = TitleToValidFilename book.metadata.["title"]
        WriteHTMLCover (CreateRelativePath "temp/OEBPS/Text/Cover.xhtml")
        if (book.metadata.["cover"]) = "" || 
            (ImageDownload book.metadata.["cover"] 
                (CreateRelativePath "temp/OEBPS/Images/Cover.png")).IsNone then 
            WriteCoverImage (CreateRelativePath "temp/OEBPS/Images/Cover.png") 

        //Write TOC and Content.opf files
        File.WriteAllText((CreateRelativePath "temp/OEBPS/content.opf"), book |> GenerateContent)
        File.WriteAllText((CreateRelativePath "temp/OEBPS/toc.ncx"), book |> GenerateTOC)
        
        //Write mimetype and container
        WriteMimetype (CreateRelativePath "temp/mimetype")
        WriteContainer (CreateRelativePath "temp/META-INF/container.xml")

        //Check and delete potential file, because .net throws an exception
        //rather than overwriting
        CheckAndDelete (title + ".epub")

        //Create new zip
        let newZip = ZipFile.Open(title + ".epub", ZipArchiveMode.Create)
        
        //add in mimetype and container.xml
        newZip.CreateEntryFromFile((CreateRelativePath "temp/mimetype"), "mimetype") |> ignore
        newZip.CreateEntryFromFile((CreateRelativePath "temp/META-INF/container.xml"), "META-INF/container.xml") |> ignore
        
        //Add in the content and toc files
        newZip.CreateEntryFromFile((CreateRelativePath "temp/OEBPS/content.opf"), "OEBPS/content.opf") |> ignore
        newZip.CreateEntryFromFile((CreateRelativePath "temp/OEBPS/toc.ncx"), "OEBPS/toc.ncx") |> ignore
        
        //Add in cover
        newZip.CreateEntryFromFile((CreateRelativePath "temp/OEBPS/Text/Cover.xhtml"), "OEBPS/Text/Cover.xhtml") |> ignore
        newZip.CreateEntryFromFile((CreateRelativePath "temp/OEBPS/Images/Cover.png"), "OEBPS/Images/Cover.png") |> ignore

        //add in the new files
        book.chapters |> List.iter (fun (x : Chapter) ->
            newZip.CreateEntryFromFile((CreateRelativePath x.directory), "OEBPS/" + x.src) |> ignore)
        if (book.images |> List.length) > 0 then
            book.images |> List.iter (fun (x : ImageData) ->
                try
                    newZip.CreateEntryFromFile((CreateRelativePath x.directory), "OEBPS/" + x.src) |> ignore
                with
                _ -> ()) |> ignore
        newZip.Dispose()
        
        Directory.Delete(CreateRelativePath "temp", true)















