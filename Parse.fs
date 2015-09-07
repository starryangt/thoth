module Parse
    open NSoup 
    open Download

    let lower (x : NSoup.Nodes.Element) (y : NSoup.Nodes.Element) =
        (*
            Tests if the x is lower than y in the html tree by
            seeing if x is in y's children
        *)
        (y.Children) |> Seq.exists (fun z -> z = x)

    let FindContent (Document : NSoup.Nodes.Document) =
        (*
            Given a NSoup document, pulls a list of all elements in the document
            and processes it, finding a selection of tags which likely contain the
            beginning of content in the document
        *)
        let rec loop acc counter fail elements =
            match elements with
            | [] -> acc
            | (hd : NSoup.Nodes.Element) :: tl -> match (hd.OwnText()).Trim() with
                                                    |_ when fail > 3 -> loop acc 0 0 tl
                                                    |_ when counter > 1000 -> loop acc 0 0 []
                                                    |_ when (hd.OwnText()).Length < 15 -> loop acc counter (fail + 1) tl
                                                    |_ when (hd.OwnText()).Length > 15 -> loop (hd :: acc) (counter + (hd.OwnText()).Length) fail tl
                                                    |_ -> loop acc counter fail tl

        (Document.Body.Select("*")) |> Seq.toList |> loop [] 0 0

    let rec ParentByStringContent content =
        (*
            Given a list of potential content tags returns the parent tag which
            contains over 70% of the total text contained in the content tags
        *)

        //This function makes me sad because its better than the other one even though it's
        //so much simpler :(

        let total = content |> List.fold (fun acc (x : NSoup.Nodes.Element) -> acc + (x.Text()).Length) 0
        let parents = content |> List.map (fun (x : NSoup.Nodes.Element) -> x.Parent)
        let rec loop = function
            |[] -> ParentByStringContent parents
            | (hd : NSoup.Nodes.Element) :: tl -> match hd with
            |_ when (float (hd.Text()).Length) / (float total) > 0.7 -> hd
            |_ -> loop tl
        loop parents
        
    let rec ParentByMostPopular content = 
        (*
            Given a list of potential content tags returns the parent tag which
            is the parent of a 1/8 of the tags
            
            The complexity of this function is O(ihavenoideabutitsnotgood)
        *)
        let parents = content |> List.map (fun (x : NSoup.Nodes.Element) -> x.Parent)
        
        let rec loop (map : Microsoft.FSharp.Collections.Map<int, int>) parents =
            //this was the intuitive way to get the most common element for me
            //I'm pretty sure you could use a monad for this but then I'd have to
            //know how to use monads
            match parents with
            |[] -> map
            | hd :: tl -> match (map.ContainsKey(hd.GetHashCode())) with
                            |true -> loop (map.Add(hd.GetHashCode(), (map.[hd.GetHashCode()]) + 1)) tl
                            |false -> loop (map.Add(hd.GetHashCode(), 0)) tl
        //This log string of functions gets the hash code of the most common parent
        let hash = parents |> loop Map.empty |> Map.toList 
                            |> List.sortBy (fun x -> match x with | (_, y) -> y * -1) 
                            |> List.head |> function |(x, _) -> x
        
        let parentPotential = parents |> List.filter (fun (x : NSoup.Nodes.Element) -> 
            (x.GetHashCode()) = hash) |> List.head
        let passRate = content |> List.fold (fun acc x -> 
            if (lower x parentPotential) then acc + 1 else acc) 0
        match passRate with
            |_ when passRate > (content |> List.length) / 8 -> parentPotential
            |_ -> ParentByMostPopular parents
