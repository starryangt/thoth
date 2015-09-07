open NSoup
open System
open System.Threading
open Download
open Parse
open Process
open System.IO

let main() = 
    let url = "http://krytykal.org/antimagic/volume-1/prologue/"
    //let doc = NSoupClient.Parse(File.ReadAllText("onetag.html"))
    let doc = NSoupDownload url
    let content = FindContent (doc.Value)
    let idk = content |> ParentByStringContent
    let children = idk.Children
    let img = children.Select("img")
    //ImageDownload img "Images/test.jpg"
    let a = ProcessImages "hi" img
    printfn "huh%A" a
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 
main()
