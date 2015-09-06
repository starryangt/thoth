module Download
open System.Net
open NSoup
    //TODO: Implement .Net's WebBrowser to get content behind anti-ddos
    let NSoupDownload (url : string) =

        (* Given a url, tries to download it 6 times, then aborts to None
            If succesful, passes the content to NSoup for parsing
        *)
        let rec DownloadURL (url : string) counter =
            let client = new WebClient()
            if counter > 5 then
                None
            else
                try
                    Some (client.DownloadString(url))
                with
                |_ -> DownloadURL url (counter + 1)
        
        match (DownloadURL url 0) with
        |Some x -> Some (NSoupClient.Parse(x, url))
        |None -> None
