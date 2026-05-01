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