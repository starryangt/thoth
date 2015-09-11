module Download
open System.Net
open System.IO
open NSoup
open System.Text
open System

    //TODO: Implement .Net's WebBrowser to get content behind anti-ddos
    let NSoupDownload (url : string) =

        (* Given a url, tries to download it 3 times, then aborts to None
            If succesful, passes the content to NSoup for parsing
        *)
        let rec DownloadURL (url : string) counter =
            let client = new WebClient()
            printfn "Attemp %d" counter
            if counter > 2 then
                None
            else
                try
                    let raw = client.DownloadData(url)
                    let encoding = Encoding.UTF8
                    Some (encoding.GetString(raw))
                with
                |_ -> DownloadURL url (counter + 1)
        
        match (DownloadURL url 0) with
        |Some x -> Some (NSoupClient.Parse(x, url))
        |None -> None

    let RelativeToAbsolute (absolute : string) (relative : string) =
        (*
            Wrapper around the Uri object's ability to construct an absolute 
            uri from an absolute uri and a relative one

            Uses strings and returns strings
        *)
        (new Uri(new Uri(absolute), new Uri(relative))).AbsoluteUri
    
    let ImageDownload (url : string) (filepath : string) =
        let client = new WebClient()

        try
            client.DownloadFile(url, filepath)
            Some filepath
        with
        |_ -> None

    let HigherImageDownload ID url =
        let extension = match (Path.GetExtension(url)) with
        |"" -> ".png"
        |_ -> Path.GetExtension(url)
        false 
    let TemplateXHTML (title : string) (content : string) =
    sprintf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"no\"?>\n\
    <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">\n\
    <html xmlns=\"http://www.w3.org/1999/xhtml\">\n\
	<head>\n\
		<title></title>\n\
	</head>\n\
	<body>\n\
		<h3 align=\"center\">%s</h3>\n\
		<hr />\n\
		%s\n\
	</body>\n\
        </html>" title content;;

    let WriteXHTML title content filepath =
        let template = TemplateXHTML title content
        File.WriteAllText(filepath, template)
