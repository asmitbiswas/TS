import type { chaiList } from "../types";
import  {CarName} from "./Car.tsx"
interface chaiListProps{
    items: chaiList[]
}

export function chailist(items): chaiListProps{
    return(
        <div>
            {items.map((chai) => (
                <CarName 
                key = {chai.isSpecial}
                name = {chai.name}
                price = {chai.price}
                />

            ))}
        </div>
    )
}

export default chailist;