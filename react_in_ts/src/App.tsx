import "./App.css";
import Car from "./components/Car.tsx";
import ChaiList from "./components/chaiList.tsx";
import  counter  from "./components/counter.tsx";
import OrderForm from "./components/orderFOrm.tsx";
import { card } from "./components/Card.tsx";
import type {chaiList} from "./types.ts"

const menu:chaiList[] = [
    {id: 24, name:"masala", price: 20, isSpecial: false }
]

function App() {
    return (
        <div>
            <h1>Vite + React</h1>

            <Car
                name="BMW"
                price={125456}
                isSpecial={true}
            />

            <Car
                name="Audi"
                price={99999}
                isSpecial={false}
            />,
            <div>
                 <ChaiList items = {menu}/> 
            </div>
            <div>
                <OrderForm
                onSubmit ={(order) => {
                    console.log("Placed order", order.name, order.price)
                }}
                />
            </div>
            <div>
                <card/>
            </div>
        </div>
    
    
    );
}

export default App;