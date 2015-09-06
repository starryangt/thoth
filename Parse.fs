module Parse
    open NSoup 
    open Download
    
    let FindContent (seed : NSoup.Select.Elements) =

        let rec loop acc counter fail elements =
            match elements with
            | [] -> acc
            | (hd : NSoup.Nodes.Element) :: tl -> match (hd.OwnText()).Trim() with
                    |_ when fail > 3 -> loop acc 0 0 tl
                    |_ when counter > 1000 -> loop acc 0 0 []
                    |_ when (hd.OwnText()).Length < 15 -> loop acc counter (fail + 1) tl
                    |_ when (hd.OwnText()).Length > 15 -> loop (hd :: acc) (counter + (hd.OwnText()).Length) fail tl
                    |_ -> loop acc counter fail tl

        seed |> Seq.toList |> loop [] 0 0
