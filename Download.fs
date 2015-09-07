module Download
open System.Net
open System.IO
open NSoup
    //TODO: Implement .Net's WebBrowser to get content behind anti-ddos
    let NSoupDownload (url : string) =

        (* Given a url, tries to download it 3 times, then aborts to None
            If succesful, passes the content to NSoup for parsing
        *)
        let rec DownloadURL (url : string) counter =
            let client = new WebClient()
            if counter > 2 then
                None
            else
                try
                    Some (client.DownloadString(url))
                with
                |_ -> DownloadURL url (counter + 1)
        
        match (DownloadURL url 0) with
        |Some x -> Some (NSoupClient.Parse(x, url))
        |None -> None

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
        
