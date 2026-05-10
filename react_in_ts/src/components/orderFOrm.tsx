import { useState } from "react";

interface orderFormProps {
    onSubmit(order:{name:string, price:number}): void
}

function OrderForm({onSubmit}: orderFormProps){
    const [name, setName] = useState<string>("BMW")
    const [price, setPrice] = useState<number>(24)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, price });
        // Resets form (optional)
        setName("");
        setPrice(0);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Car Name:
                <input  
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label>
                Price:
                <input  
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </label>
            
            <button type="submit">Submit Order</button>
        </form>
    )
}

export default OrderForm;