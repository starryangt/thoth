open Download
open Parse
open Process
open Arguments
open System
open System.IO
open System.Net
open System.IO.Compression
open System.Windows.Forms

let Ask question =
    printfn "%s" question
    Console.ReadLine()

let ListBehavior (args : CLOptions) =
    let title =
        match args.title with
        |Title(x) -> x
        |EmptyTitle -> (Ask "Enter title: ")
    let author = 
        match args.author with
        |Author(x) -> x
        |EmptyAuthor -> Ask "Enter Author: "
    let cover =
        match args.cover with
        |Cover(x) -> x
        |EmptyCover -> Ask "Enter Cover Image URI (optional): "
    EbookFromList args.strict title author cover args.inputs 

let ProcessInput (input : string) =
    
    //Regex? What's that? /s
    let comma = input.IndexOf(",")
    let first = input.Substring(0, comma) |> System.Int32.Parse
    let rest = input.Substring(comma + 1) |> System.Int32.Parse
    (first, rest) 

let rec IndexWebBehavior url (args : CLOptions) =
    let rec AskInsistently question =
        let result = GetURLs (Ask question)
        match result with
        |Some(x) -> x
        |None -> printfn "Invalid Index, try again."; AskInsistently question

    let index = 
        match url with
        |"" -> AskInsistently "Enter Index URL: "
        |_ -> (GetURLs url).Value
        
    let urls = index |> Seq.map (fun (x : NSoup.Nodes.Element) -> (x.Attr("abs:href")))
    let urlsText = index |> Seq.map (fun (x : NSoup.Nodes.Element) -> (x.OwnText()))     
    let title =
        match args.title with
        |Title(x) -> x
        |EmptyTitle -> (Ask "Enter title: ")
    let author = 
        match args.author with
        |Author(x) -> x
        |EmptyAuthor -> Ask "Enter Author: "
    let cover =
        match args.cover with
        |Cover(x) -> x
        |EmptyCover -> Ask "Enter Cover Image URI (optional): "

    urlsText |> Seq.iteri (fun i x -> printfn "%d - %s" i x) |> ignore
    let input = ProcessInput (Ask "Enter range in format 'a,b'")
    let range =
        match input with
        |(a,b) -> seq {a .. b}
    let targets = range |> Seq.map (fun x -> Seq.nth x urls)
    printfn "Downloading... "
    targets |> Seq.iter (fun x -> printfn "%s" x) |> ignore
    EbookFromList args.strict title author cover (targets |> Seq.toList)
     
let IndexListBehavior (args : CLOptions) =
    let filepath = (args.inputs |> List.head)
    let urls = (File.ReadAllLines filepath) |> Array.toList

    let title =
        match args.title with
        |Title(x) -> x
        |EmptyTitle -> (Ask "Enter title: ")
    let author = 
        match args.author with
        |Author(x) -> x
        |EmptyAuthor -> Ask "Enter Author: "
    let cover =
        match args.cover with
        |Cover(x) -> x
        |EmptyCover -> Ask "Enter Cover Image URI (optional): "

    EbookFromList args.strict title author cover urls 

let NovelUpdateBehavior url (args : CLOptions) = 
    let doc = (NSoupDownload(url)).Value
    let coverCandidates = (doc.Select("div.seriesimg").Select("img")) |> Seq.toList
    let title =
        match args.title with
        |Title(x) -> x 
        |EmptyTitle -> (doc.Select("h4.seriestitle") |> Seq.head).OwnText()
    let author =
        match args.author with
        |Author(x) -> x
        |EmptyAuthor -> (doc.Select("a#authtag") |> Seq.head).OwnText()
    let cover =
        match args.cover with
        |Cover(x) -> x
        |EmptyCover ->
                match coverCandidates with
                |[] -> ""
                |_ -> (coverCandidates |> List.head).Attr("src")
    let urls = (GetAllLinks url).Value |> List.rev |> List.toSeq 
    urls |> Seq.iteri (fun i x -> printfn "%d - %s" i x) |> ignore
    let input = ProcessInput (Ask "Enter range in format 'a,b'")
    let range =
        match input with
        |(a,b) -> seq {a .. b}
    let targets = range |> Seq.map (fun x -> Seq.nth x urls)
    printfn "Downloading... "
    targets |> Seq.iter (fun x -> printfn "%s" x) |> ignore
    EbookFromList args.strict title author cover (targets |> Seq.toList)

let HandleArguments (arguments : CLOptions) =
    match arguments.inputs with
    |_ when (arguments.inputs |> List.length) < 1 ->
            IndexWebBehavior "" arguments
    |_ when (arguments.inputs |> List.length) = 1 ->
            match arguments.index with
            |FileIndex -> IndexListBehavior arguments
            |WebIndex -> IndexWebBehavior (arguments.inputs |> List.head) arguments
            |NovelIndex -> NovelUpdateBehavior (arguments.inputs |> List.head) arguments
    |_ ->
            ListBehavior arguments


[<EntryPoint>]
let main args = 
    let arguments = ProcessArguments args
    HandleArguments arguments 
    0
