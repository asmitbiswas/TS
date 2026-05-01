// class chai{
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour= flavour,
//     //     this.price = price
//     // }
//     constructor(flavour: string){
//         this.flavour= flavour,
        
//     }
// }

// const masalaChai = new chai("masala")
//  masalaChai.flavour = "masala"




class car{
    public car1:string = "Masda Rx 7"
    
    private modification = "Modifiying engine to v12 and making the turbo 100000 and the rpm is 100000"

    revealModification(){
        return this.modification
    }
}
const cm = new car()

// class delarShip{
//     protected delarShipName = "Car mania"
// }

// class Branch extends delarShip{
//     ReavelShopName(){
//         return this.delarShipName
//     }
// }

// new Branch().ReavelShopName

class engine{
    #engine = "W16"

    getEngine(){
        return this.#engine
    }
}

const e = new engine()

// 1 = 5 ltrs

class engineCapacity{
    readonly engineCapacity:number = 100

    constructor(engineCapacity:number){
         this.engineCapacity = engineCapacity
    }
}

class carRpm{
    private _rpm = 220000000

    get rpm(){
        return this._rpm
    }

    set rpm(value:number){
        if(value > 99999999999999999) throw new Error("Car so powerful Bro")
            this._rpm = value
    }
}

const R = new carRpm()
R.rpm = 2131554561

 class bike{
    static bike:string = "duccati"

    constructor(public bike:string){
        this.bike = bike
    }
 }

 abstract class Drink{
    abstract make():void
 }

 class Branch extends Drink{
   make(){
    console.log("brewing chai (^-^)")
   }  
 }

 class heater{
    heat(){}
 }

 class makeRoomHot{
    constructor(private heater:heater){}

    make(){
        this.heater.heat
    }
 }