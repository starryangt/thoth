open NSoup
open System
open System.Threading
open Download
open Parse
open System.IO

let main() = 
    let url = "http://www.baka-tsuki.org/project/index.php?title=Unlimited_Fafnir:Volume_8_Chapter_1"
    //let doc = NSoupClient.Parse(File.ReadAllText("onetag.html"))
    let doc = NSoupDownload url
    let content = FindContent (doc.Value)
    let idk = content |> ParentByStringContent
    printfn "huh%s" (idk.Text())
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 
main()
