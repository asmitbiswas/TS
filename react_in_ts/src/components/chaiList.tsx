import type { chaiList } from "../types";
import CarName from "./Car";

interface ChaiListProps {
    items: chaiList[];
}

export function ChaiList({ items }: ChaiListProps) {
    return (
        <div>
            {items.map((chai, index) => (
                <CarName
                    key={index}
                    name={chai.name}
                    price={chai.price}
                    isSpecial={chai.isSpecial}
                />
            ))}
        </div>
    );
}

export default ChaiList;