open NSoup
open System
open System.Threading


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
            |_ when fail > 3 -> loop tl 0 0 []
            |_ when counter > 1000 -> loop [] 0 0 acc
            |_ when ((hd.OwnText()).Trim()).Length < 25 -> loop tl counter (fail + 1) acc
            |_ -> loop tl (counter + (hd.OwnText()).Length) fail (hd :: acc)

    loop list_ver 0 0 []
        
    

let main() = 
    let url = "http://www.baka-tsuki.org/project/index.php?title=Madan_no_Ou_to_Vanadis:Volume01_Prologue"
    let doc = try_connect(url)
    let (all : NSoup.Select.Elements) = doc.Select("*")
    let head = doc.Head
    printfn "head %s" (head.TagName())
    let next = head.NextElementSibling
    let child = next.Child(1)
    let parents = child.Parents
    let contain = higher next child
    let something = all |> test
    //for element in all do printfn "own_text%s" (element.OwnText())
    printfn "%A" something
        //
        //for elemtn in headline do printfn "text: %s" (elemtn.OwnText())
 
main()
