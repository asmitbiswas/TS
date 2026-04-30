const chaiFlavours: string[] = ['masala', "adrak", "green tea"]
const chaiPrice: number[] = [10, 16.99, 60.6769]

const rating : Array<number> = [4.33, 1.2, 5.0]

type chai = {
    name: string;
    price: number,
}

const menu: chai[] = [
    {name:"masala", price: 25},
    {name:"milk", price: 10}
]

const cities: readonly string[] = ["Kolkata", "Pune", "Los santos"]
// cities.push("jaipur") nahhh err $-$

let chaiTuple: [string, number];

chaiTuple = ["masala", 45]
// nope: chaiTuple = [45, "masala"]

let userInfo : [string, number, boolean? ]

userInfo = ["Asmit_Legend $-$", 41, true]
userInfo = ["Asmit_Legend $-$", 41]

const price : [number, number] = [22,41.41]

const bikeName: [name:string, price: number] = ["Ducatti Panigle v4", 4000000]

enum carName{
   car1 = "BMW M5 2013 model",
   car2 = "BMW E39",
   car3 = "Buggati bolide",
   car4 = "Land Rover Defender ( large size )"

}

const car = carName.car1 // 💀

enum Status {
    pending = 100,
    DONE,// 101
    err// 102
}

enum carType{
    BMW = "BMW m4 sport💀",
    lamborghini = "lamborghini aventador 💀",
    BMW2 = "BMW M5 sport 💀"
}

function buyCar(type:carType){
    console.log(` ${type}`)
}

buyCar(carType.BMW)
buyCar(carType.BMW2)

enum randomEnum {
    id = 4153,
    name = "Asmit"
}
// 1 = 10 ltrs 💀

const enum Carpetrol {
    BMWM5 = 2, // day
    BMWE39 = 1 // day
}

const CP = Carpetrol.BMWM5

let t: [string, number] = ["chai", 123]
t.push("💀")