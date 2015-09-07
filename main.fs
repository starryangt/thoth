open NSoup
open System
open System.Threading
open Download
open Parse
open System.IO

let main() = 
    let url = "http://royalroadl.com/forum/showthread.php?tid=28760"
    //let doc = NSoupClient.Parse(File.ReadAllText("onetag.html"))
    let doc = NSoupDownload url
    let content = FindContent (doc.Value)
    let idk = content |> ParentByStringContent
    printfn "huh%s" (idk.Text())
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 
main()
