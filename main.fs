open NSoup
open System
open System.Threading
open Download
open Parse
open Process
open System.IO
open Monads

[<EntryPoint>]
let main args = 
    let url = "http://skythewood.blogspot.sg/p/altina-sword-princess.html"
    let Async = new AsyncBuilder()
    let a = ProcessPage url 
    match a with
    |Some x -> printfn "OK! %s" x.html
    |None -> printfn "Fail"
    0
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 

