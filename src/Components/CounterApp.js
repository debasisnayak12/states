import React,{useState} from "react";

const CounterApp = () => {
    const [count,setCount] = useState(0);

    function inc(){
       if(count < 10){
           setCount(count+1)
       }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increase</button>
            <button onClick={()=> count>1?setCount(count-1):""}>Decrease</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default CounterApp;