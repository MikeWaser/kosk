import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleAddCLick = () => {
        setCount(count + 1);
    }
    const handleRemoveCLick = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handleAddCLick}>+1</button>
            <p>{count}</p>
            <button onClick={handleRemoveCLick}>-1</button>
        </div>
    )
}

export default Counter