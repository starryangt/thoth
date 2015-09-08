module Monads
    open System.Threading
    (*
    Collection of useful monads
    No, I have no idea how they work
    *)

    type OptionBuilder() =
        //oh god save me, a monad
        member this.Bind(x, func) = Option.bind func x
        member this.ReturnFrom o = o
        member this.Return x = Some x

    type AsyncBuilder() =
        member this.Bind(x, f) = ThreadPool.QueueUserWorkItem(
            new WaitCallback( fun x -> f(x))) |> ignore
        member this.ReturnFrom x = x
        member this.Return x = x

    let MaybeMap func list =
        (*
            A map for lists that doesn't add None results to the list
            This probably exists already, but whatever
            It's also not a monad
        *)
        let rec loop acc list = match list with
        |[] -> acc
        |hd :: tl -> 
                match (func hd) with
                |Some x -> loop (x :: acc) tl
                |None -> loop acc tl
        loop [] list
