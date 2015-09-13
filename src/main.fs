open Process
open Arguments
open System
open Download
open System.IO
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
    EbookFromList title author cover args.inputs 

let ProcessInput (input : string) =
    let comma = input.IndexOf(",")
    let first = input.Substring(0, comma) |> System.Int32.Parse
    let rest = input.Substring(comma + 1) |> System.Int32.Parse
    (first, rest) 

let rec IndexWebBehavior (args : CLOptions) = 
    let index = (GetURLs (Ask "Enter Index: ")).Value
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
    EbookFromList title author cover (targets |> Seq.toList)
     

    //printfn "%A" unwrappedIndex
    //unwrappedIndex |> Seq.iteri (fun i x -> printfn "%d - %s" i x)

let IndexListBehavior filepath (args : CLOptions) =
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

    EbookFromList title author cover urls 
    
    
[<EntryPoint>]
let main args = 
    let url = "http://skythewood.blogspot.sg/p/altina-sword-princess.html"
    let urls = ["http://www.baka-tsuki.org/project/index.php?title=Seirei_Tsukai_no_Blade_Dance:Volume1_Chapter1"; "http://www.baka-tsuki.org/project/index.php?title=Seirei_Tsukai_no_Blade_Dance:Volume1_Chapter2"; "http://www.baka-tsuki.org/project/index.php?title=Seirei_Tsukai_no_Blade_Dance:Volume1_Chapter3"]
    let result = ProcessArguments args
    printfn "Cover: %A" result.cover
    IndexListBehavior "this.txt" result
    //EbookFromList "something" "something" urls 
    //IndexWebBehavior result
    //EbookFromList "test" "me" urls
    0
