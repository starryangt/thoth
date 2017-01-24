module Download
    open System.Net
    open System.IO
    open NSoup
    open System.Text
    open System
    open System.Web
    open System.Windows.Forms

    //TODO: Implement .Net's WebBrowser to get content behind anti-ddos
    let NSoupDownload (url : string) =

        (* 
            Given a url, tries to download it 3 times, then aborts to None
            If succesful, passes the content to NSoup for parsing
            
            Downloads the raw data and then encodes it because WebClient does
            not encode files properly normally.

            It should take the encoding from a http header, but I'm lazy and
            most sites are UTF-8 regardless. 
        *)
        
        let rec DownloadURL (url : string) counter =
            let client = new WebClient()
            client.Headers.Add("user-agent", "Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/2.0.0.11")
            printfn "Downloading... %s" url
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

    let CreateRelativePath path =
        (*
            Creates a path relative to the executable
        *)

        IO.Path.Combine(IO.Directory.GetParent(Application.ExecutablePath).FullName, path)

    let ImageDownload (url : string) (filepath : string) =
        (*
            Wrapper around WebClientDownload 
        *)

        let client = new WebClient()
        try
            client.DownloadFile(url, filepath)
            Some filepath
        with
        |_ -> None

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
        (*
            Writes HTML to drive, using the template above.
            Split into two functions because of sprintf shenanigans.
        *)

        let template = TemplateXHTML title content
        File.WriteAllText(filepath, template)

    let CheckAndDelete filepath =
        (*
            Wrapper around delete that checks if the file exists 
        *)

        match File.Exists(filepath) with
        |false -> ()
        |true -> File.Delete(filepath)
 
    let CheckAndDeleteDirectory path =
        (*
            Wrapper around delete that checks if the file exists 
        *)

        match Directory.Exists(path) with
        |false -> ()
        |true -> Directory.Delete(path, true)
       
    let GetExtension filepath =
        (*
            A wrapper around Path.GetExtension. The reason why it matches against
            specific types is that Path.GetExtension will place get requests and
            other nonsense from urls into the path
        *)

        let extension = Path.GetExtension(filepath)
        match extension with
        |".png" -> ".png"
        |".jpeg" -> ".jpeg"
        |".gif" -> ".gif"
        |".tif" -> ".tif"
        |".tiff" -> ".tiff"
        |_ -> ".jpg"
