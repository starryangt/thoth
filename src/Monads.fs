module Monads
    open System.Threading
    (*
    Collection of useful monads
    No, I have no idea how they work

    In the end, this file turned into a collection of useful functions
    *)

    type OptionBuilder() =
        //oh god save me, a monad
        member this.Bind(x, func) = Option.bind func x
        member this.ReturnFrom o = o
        member this.Return x = Some x

    let MaybeMap func list =
        (*
            A map for lists that doesn't add None results to the list
            This probably exists already, but whatever
            It's also not a monad
        *)
        let rec loop acc list = 
            match list with
            |[] -> acc
            |hd :: tl -> 
                match (func hd) with
                |Some x -> loop (x :: acc) tl
                |None -> loop acc tl
        loop [] list

    let pmap f l =
        (*
            Async map
        *)
        seq { for a in l -> async { return f a } }
        |> Async.Parallel |> Async.RunSynchronously
