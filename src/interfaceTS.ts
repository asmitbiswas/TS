type chaiOrder = {
    type:string,
    sugar:number,
    strong:boolean
}

function makeChai(order: chaiOrder){
    console.log(order)
}

function serveChai(order:chaiOrder) {
    console.log(order)
}

type teaRecipe = {
    water:number;
    sugar:number
} 

class masalaChai implements teaRecipe{
    water = 100;
    sugar = 20
}

interface cupSize {
    size: "small" | "medium"
}

class Chai implements cupSize{
    size: "small" | "medium" = "small";
}

// type res = {ok: true} | {ok: false}

// class myRes implements res{
//     ok: boolean = false;
// }

type teaTypes = "Tandoori" | "Elachi" | "lemon"

function returnChai(t: teaTypes){
    console.log(t)
}

type baseChai = {teaLeaves: number}
type Extra = {lemon: number}

type LemonChai = baseChai & Extra

const cup:LemonChai = {
    teaLeaves : 123,
    lemon: 23

}

type User = {
    name: string,
    bio?:  string
}

const u1: User = {name : "Asmit"}
const u2 : User = {name:"abhinaba", bio: "goosy.ai"}

type Config = {
    readonly appN: string
    version : number
} 

const cfg: Config = {
    appN : "Meow.ai",
    version: 45665415506515
}

// cfg.appN = "ai"