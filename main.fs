open NSoup
open System
open System.Threading
open Download
open Parse
open Process
open System.IO
open Monads
open System.Net
open System.Text
open System.Web
open System.IO.Compression
open Epub

[<EntryPoint>]
let main args = 
    let url = "http://skythewood.blogspot.sg/p/altina-sword-princess.html"
    let urls = ["http://www.baka-tsuki.org/project/index.php?title=Seirei_Tsukai_no_Blade_Dance:Volume1_Chapter1"; "http://www.baka-tsuki.org/project/index.php?title=Seirei_Tsukai_no_Blade_Dance:Volume1_Chapter2"; "http://www.baka-tsuki.org/project/index.php?title=Seirei_Tsukai_no_Blade_Dance:Volume1_Chapter3"]
    let book =  EbookFromList "test" "me" urls
    printfn "%A" (GenerateTOC book)
    //ProcessList urls
    //ProcessList urls
    //let book = GetBook |> AddTitle "title"
    //printfn "no"
    //ProcessList urls
    //printfn "%A" (HttpUtility.HtmlDecode(uri))
    //let what = ProcessList urls
    //printfn "%A" what
    //let page = (ProcessPage (urls.Head)).Value
    0
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 

