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
open System.IO.Compression

[<EntryPoint>]
let main args = 
    let url = "http://skythewood.blogspot.sg/p/altina-sword-princess.html"
    let urls = ["http://krytykal.org/antimagic/volume-1/chapter-1/"; "http://krytykal.org/antimagic/volume-1/chapter-2/"; "http://krytykal.org/antimagic/volume-1/chapter-3/"]
    //let page = (ProcessPage (urls.Head)).Value
    ZipFile.CreateFromDirectory("wtf/", "test.epub", CompressionLevel.NoCompression, false)
    0
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 

