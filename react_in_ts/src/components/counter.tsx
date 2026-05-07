import {useState} from  "react";

 function counter(){
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <p>cups orderd: {count}</p>
            <button onClick={ () => setCount((c) => c+1)}>order one more</button>
        </div>
    )
}

export default counter;