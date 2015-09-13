module Arguments
    //Different options
    //Flags - 
    //Options If ony one non-flag argument, then index behavior
    //If more than one, then list behavior
    //list-file flag

    type AuthorState = 
        |EmptyAuthor
        |Author of string

    type TitleState =
        |EmptyTitle
        |Title of string
    
    type CoverState =
        |EmptyCover
        |Cover of string

    type CLOptions = class
        val inputs : list<string>
        val file : bool
        val title : TitleState
        val author : AuthorState
        val cover : CoverState

        new (input, file, title, author, cover) =
            {inputs = input; file = file; title = title; author = author; cover = cover}

        new (input, file, title, author) =
            {inputs = input; file = file; title = title; author = author; cover = EmptyCover}
    
        new (input, (options : CLOptions)) =
            {inputs = input; file = options.file; title = options.title; author = options.author; cover = options.cover}

        member x.SetFile file =
            new CLOptions(x.inputs, file, x.title, x.author)
        
        member x.SetAuthor author =
            new CLOptions(x.inputs, x.file, x.title, author)

        member x.SetTitle title =
            new CLOptions(x.inputs, x.file, title, x.author)

        member x.SetCover cover =
            new CLOptions(x.inputs, x.file, x.title, x.author, cover)

        member x.AddInput input =
            new CLOptions((input :: x.inputs), x.file, x.title, x.author) 

    end
        
    let ProcessArguments args =
        let arglist = args |> List.ofSeq
        
        let rec loop arguments (acc : CLOptions) =
            match arguments with
            |[] -> acc
            |"-f" :: tl -> loop tl (acc.SetFile true)
            |"-c" :: tl ->
                    match tl with
                    |(x : string) :: xs -> loop xs (acc.SetCover (Cover(x)))
                    |_ -> loop tl acc
            |"-a" :: tl ->
                    match tl with
                    |(x : string) :: xs -> loop xs (acc.SetAuthor (Author(x)))
                    |_ -> loop tl acc
            |"-t" :: tl ->
                    match tl with
                    |(x : string) :: xs -> loop xs (acc.SetTitle (Title(x)))
                    |_ -> loop tl acc
            |hd :: tl -> loop tl (acc.AddInput hd)
            
        new CLOptions([], false, EmptyTitle, EmptyAuthor) |> loop arglist
