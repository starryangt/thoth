module Process
    open NSoup
    let ProcessImages identifier images =
        (*
            This function is terrible and not pure at all but
            I don't want to make deep copies of everything. So blame
            .net object references.
        *)
        
        //steps
        //Grab the original src, put in list
        //Change the src to what new url would be
        //return list of filepaths
        let originalSources = images |> Seq.toList |> List.map (fun (x : NSoup.Nodes.Element) -> x.Attr("src"))
        
        let rec loop counter (acc : list<string>) (im : list<NSoup.Nodes.Element>) = 
            if (im = []) then
                acc
            else
                let head = im |> List.head
                let filename = identifier + (string counter) + ".jpg"
                head.Attr("src", "../Images/" + filename)
                loop (counter + 1) (("temp/" + filename) :: acc) (List.tail im)

        let filepaths = loop 0 [] (images |> Seq.toList)
        (filepaths, originalSources)

                 


