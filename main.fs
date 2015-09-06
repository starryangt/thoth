open NSoup
open System
open System.Threading
open Download
open Parse

exception DownloadFailedTooManyTimes of string
let rec try_connect url =
    let rec loop url counter =
        if counter > 5 then raise (DownloadFailedTooManyTimes(url))
        printf "Number of tries: %d" counter
        Thread.Sleep(2000)
        try
            (NSoupClient.Connect(url)).Get()
        with
        //the ~~~anti-pattern~~~
        //Work on it later, looking up exceptions is too much work
        |_ -> loop url (counter + 1)
    loop url 0

let higher (tag1 : NSoup.Nodes.Element) (tag2: NSoup.Nodes.Element) =
    (tag2.Parents) |> Seq.exists (fun x -> x = tag1)

let lower (tag1 : NSoup.Nodes.Element) (tag2: NSoup.Nodes.Element) =
    (tag2.Children) |> Seq.exists (fun x -> x = tag1)

let test_empty (tag : NSoup.Nodes.Element)=
    match (tag.OwnText()).Trim() with
    | "" -> false
    | _ -> true 

let find_content element =
    let rec recur_string (child : NSoup.Nodes.Element) char_counter fail_counter =
        printfn "tag %s" (child.TagName())
        if not ((child.NextElementSibling) <> null) then
            false
        elif char_counter > 200 then
            true
        elif fail_counter > 10 then
            false
        else 
            printfn "pass"
            let own_string = (child.OwnText()).Trim()
            match own_string with
            |"" -> recur_string (child.NextElementSibling) char_counter (fail_counter + 1)
            |_ -> recur_string (child.NextElementSibling) (char_counter + own_string.Length) fail_counter
    recur_string element 0 0

let test (elements : NSoup.Select.Elements) =
    let list_ver = elements |> Seq.toList 
    //conditions
    //IF FAIL > 5 then
        //reset the accumulator, counter, and fail counter
    //IF COUNTER > 200 then
        //abort
    //IF element has text then
        //add the length to counter, add the element to the list
    //IF element has no text then
        //add to the fail counter 
    let empty (str : string) =
        match (str.Length) with
        |_  when (str.Length) > 25 -> false
        |_ -> true

    let rec loop ele counter fail acc =
        match ele with
        | [] -> acc
        | (hd : NSoup.Nodes.Element) :: tl -> match (hd.OwnText()).Trim() with
            |_ when fail > 3 -> loop tl 0 0 acc
            |_ when counter > 1000 -> loop [] 0 0 acc
            |_ when (hd.OwnText()).Length < 15 -> loop tl counter (fail + 1) acc
            |_ when (hd.OwnText()).Length > 15 -> loop tl (counter + (hd.OwnText()).Length) fail (hd :: acc)
            |_ -> loop tl counter fail acc

    loop list_ver 0 0 []

        
let count_list li =
    let rec loop count li = match li with
    |[] -> count
    | hd :: tl -> loop (count + 1) tl
    loop 0 li

let rec get_num listofelements =
    let orig_elem = listofelements
    let parents = List.map (fun (x : NSoup.Nodes.Element) -> x.Parent) listofelements
    let sort_dict = Map.empty 
    let rec loop parent_list (map : Microsoft.FSharp.Collections.Map<int, int>) =
        match parent_list with
        |[] -> map
        | hd :: tl -> match (map.ContainsKey(hd.GetHashCode())) with
            |true -> loop tl (map.Add(hd.GetHashCode(), (map.[hd.GetHashCode()]) + 1))
            |false -> loop tl (map.Add(hd.GetHashCode(), 0))

    let result = (loop parents sort_dict) |> Map.toList |> List.sortBy (fun x -> match x with
        |(_, y) -> y * -1)
    let head = match result.Head with
        |(x, _) -> x
    
    let test_parent = parents |> List.filter (fun (x : NSoup.Nodes.Element) -> (x.GetHashCode()) = head) |> List.head
    let num_correct = List.fold (fun acc (x : NSoup.Nodes.Element) -> if (lower x test_parent) then acc + 1 else acc) 0 listofelements
    let test_count = (listofelements |> List.length) / 10
    match num_correct with
    |_ when num_correct > test_count -> test_parent
    |_ -> get_num (listofelements |> List.map(fun (x : NSoup.Nodes.Element) -> x.Parent))

let asdf (tag1 : NSoup.Nodes.Element) (tag2: NSoup.Nodes.Element) =
    match (higher tag1 tag2) with
    |true -> tag1
    |false -> tag2

let main() = 
    let url = "http://www.baka-tsuki.org/project/index.php?title=Itsuka_Tenma_no_Kuro_Usagi:Volume_1_Prologue"
    let doc = NSoupDownload url 
    let (w : NSoup.Nodes.Document) = match doc with
    |Some x -> x
    let head = w.Head
    printfn "huh%s" (head.Text())
    //for element in all do printfn "own_text%s" (element.OwnText())
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 
main()
