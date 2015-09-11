module Epub
    open System.IO
    open System
    open System.IO.Compression

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

        let entries = book.toc |> List.map formatBody |> List.reduce (+)

        (head + entries + "\n </navMap>\n</ncx>")

    let GenerateContent (book : Book) =
        let head = (sprintf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\n\
            <package xmlns=\"http://www.idpf.org/2007/opf\" unique-identifier=\"BookId\" version=\"2.0\">\n\
            <metadata xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:opf=\"http://www.idpf.org/2007/opf\">\n\
            <dc:identifier id=\"BookId\" opf:scheme=\"UUID\">urn:uuid:%s</dc:identifier>\n\
            <dc:title>%s</dc:title>\n\
            <dc:creator opf:file-as=\"%s\" opf:role=\"aut\">%s</dc:creator>\n\
            <dc:language>English</dc:language>
            <meta content=\"Cover.jpg\" name=\"cover\"/>\n\
            </metadata>\n\
            <manifest>\n\
            <item href=\"toc.ncx\" id=\"ncx\" media-type=\"application/x-dtbncx+xml\"/>\n\
            <item href=\"Text/Cover.xhtml\" id=\"Cover.xhtml\" media-type=\"application/xhtml+xml\"/>"  
            (Guid.NewGuid().ToString("N")) (book.metadata.["title"]) (book.metadata.["author"]) (book.metadata.["author"]))

        let htmlBody = book.chapters |> List.map (fun (x : Chapter) ->
            sprintf "<item href=\"%s\" id=\"%s\" media-type=\"application/xhtml+xml\"/>" x.src x.id) |> List.reduce (+)

        let coverImage = "<item href=\"Images/Cover.jpg\" id=\"Cover.jpg\" media-type=\"image/jpeg\"/>"

        let imageBody = book.images |> List.map (fun (x : ImageData) ->
            sprintf "<item href=\"%s\" id=\"%s\" media-type=\"image/jpeg\"/>" x.src x.id) |> List.reduce (+)

        let bodyEnd = "\n</manifest>\n<spine toc=\"ncx\">\n<item idref=\"Cover.xhtml\"/>"

        let tocPart = book.toc |> List.map (fun (x : TocItem) ->
            sprintf "<itemref idref=\"%s\"/>" x.id) |> List.reduce (+)

        let foot = "\n</spine>\n<guide>\n<reference href=\"Text/Cover.xhtml\" title=\"Cover\" type=\"cover\"/>"

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


    let CreateEpub (book : Book) =
        ZipFile.CreateFromDirectory("temp", (book.metadata.["title"] + ".epub"), CompressionLevel.NoCompression, false)















