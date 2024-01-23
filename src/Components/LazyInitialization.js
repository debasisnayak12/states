import React, { useState } from "react";

function hello(){
    console.log("Hello ");
    return 10;
}


const LazyInitialization = () => {
    const [count, setCount] = useState(
        () => {
            console.log("Hello")
            return 10;
        }
        
    )
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Click</button>
        </div>
    )
}


export default LazyInitialization;