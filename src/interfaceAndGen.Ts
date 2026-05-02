interface anime{
    name: string;
    pricePerEp: number;
    characters?: number
}

const A:anime = {
    name:"Demon Slayer",
    pricePerEp: 230000000,
    characters: 20
}

interface animeAbilitesAndName{
    readonly name: string;
    power1: string;
    power2: string
}

const AA:animeAbilitesAndName = {
    name:"Itachi",
    power1: "Genjutsu",
    power2: "Tsukoyomi"
}

AA.power1 = "Sharingan" // ok cause power is changen and not in readonly method
// AA.name = "naruto" : because it is under readonly method

interface discountCalculator{
    (price:number):number
}

const apply50:discountCalculator = (p:number) => p * 0.5

interface coffeMachine{
    start(): void;
    stop(): void;
}

const machine: coffeMachine  = {
    start(){
       console.log("starting")
    },

    stop(){
            console.log("Stopped")
        }
}


interface animeRating {
    [name:string]:number
}

const rating: animeRating = {
    MHA: 4.8,
     DS: 4.7,
     DN: 4.5
}

interface user {
    name: string;
}

interface user {
    age: number;
    bio?: string;
    pass: number 
}

const u: user = {
    name: "Asmit_Biswas",
    age: 12,
    pass: 123456789 // not real (^-^)
}

interface A {a: string}
interface B {b: string}

interface C extends A,B{}