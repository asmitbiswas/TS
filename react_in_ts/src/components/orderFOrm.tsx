import { useState } from "react";

interface orderFormProps {
    onSubmit(order:{name:string, price:number})
}

function orderForm({onSubmit}: orderFormProps){
    const [name, setName] = useState<string>("BMW")
    const [price, setPrice] = useState<number>(24)
    
    return <form>
        <label onSubmit={handleSubmit}>
        <input  
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        
        />
    </label>

    <label onSubmit={handleSubmit}>
        <input  
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        
        />
    </label>
    </form>
    
}