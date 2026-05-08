import "./App.css";
import Car from "./components/Car.tsx";
import ChaiList from "./components/chaiList.tsx";
import  Counter  from "./components/counter.tsx";
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
                <counter />
            </div>
        </div>
    
    
    );
}

export default App;