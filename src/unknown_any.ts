function getChai(kind:string | number){
    if( typeof kind === 'string'){
        return `Making ${kind} chai......`
    }
    return `chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg) {
        return `Serve ${msg}`
    }
}

    function orderChai(size: "small" | "medium" | "large"){
        if(size === "small"){
            return `Small cutting chai....`
        }

        if (size === "medium" || "large") {
            return ` Make some extra chai`
        }
        return `chai order #${size}`
    }

    class KulhadChai{
        serve(){
            return `Serving KulhadChai`
        }
    }
        class MasalaChai{
        serve(){
            return `Serving MasalaChai`
        }
    }

    function serve(chai: KulhadChai | MasalaChai){
        if (chai instanceof KulhadChai) {
            return chai.serve()
        }
    }

    type ChaiOrder = {
        type: string,
        sugar: number
    }

    function IsChaiOrder(obj:any):obj is ChaiOrder{
        return(
            typeof obj === "object" &&
            obj !== null &&
            typeof obj.type === "string" &&
            typeof obj.sugar === "number"
        )
    }

    function serveOrder(item: ChaiOrder| string){
        if(IsChaiOrder(item)){
            return `Serving ${item.type} with ${item.sugar}`
        }
        return `Seving custom chai`
    }

    type masalaChai ={type: "Masala"; SpiceLevel:Number}
        type gingerChai ={type: "Ginger"; amount:Number}
            type SimpleChai ={type: "TeaLeaves"; amount:Number}

            type chai = masalaChai | gingerChai | SimpleChai

     function MakeChai(order: chai){
        switch (order.type) {
            case "Masala":
                return `Serving Masala chai with love :D`
                break;
         case "Ginger":
                return `Serving Ginger chai with love :D`
                break;
                 case "TeaLeaves":
                return `Serving Simple chai with love :D`
                break;
            
        }
     }

     