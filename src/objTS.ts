const chai = {
    name: "Normal chai",
    price: 10,
    isHot: true
}

// B.T.S
// {
//    name: string 
// price: number
// isHot: boolean
// }

// { 0 - 0 )


let tea : {
    name: String,
    price: Number,
    Hot: Boolean
}

tea = {
  name:"Ginger Tea",
  price: 12,
  Hot: true
}

type Tea = {
    name:string;
    price: number;
    ingredients: string[]
}

let GreenTea: Tea = {
    name : "Green Tea",
    price: 21,
    ingredients: ["teaLeaves", "water"]
}

type Cup = {
    size:string
}

let smallCup: Cup = {
    size: "100 ML"
}

let bigCup = {
    size: "500 ml",
    price: 20
}

smallCup = bigCup

type brew = {brewTime : string}

const Kaffe = {
    brewTime: "5",
    beans:"Arbica"
}

const chaiBrew:brew = Kaffe

type user = {
    username: string,
    password: number,
    accountEmail: string,
    bio?: string | number
} 

 const u: user = {
    username: "Asmit_Legend",
    password: 676767676767676969696969696969,
    accountEmail: "asmitBiswasExp@gmail.com",
    // bio: 0
 }

 type item = {
    name: string,
    quantity: number
 }

 type address = {
    street : string,
    pin: number
 }

 type orderAddress = {
    name: string,
    Item: item[ ]
    address: address
 }

 type chaiType = {
    name: String,
    price: Number,
    Hot: Boolean
 }

 const updateChai = (updates: Partial<chaiType>) => {
    console.log("Updating tea with", updateChai )    
}

updateChai({price: 12});
updateChai({Hot: true})
updateChai({})