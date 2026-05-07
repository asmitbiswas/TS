import "./App.css";
import Car from "./components/Car.tsx";

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
            />
        </div>
    );
}

export default App;