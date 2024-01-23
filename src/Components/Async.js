import React, { useState } from "react";

const Async = () => {
    const [count, setCount] = useState(0);
    console.log("I Am Executing")

    // function inc1(){
    //     setCount(count+1)
    //     setCount(count+4)
    //     setCount(count+16)
    //     setCount(count+1)
    //     setCount(count+4)
    //     setCount(count+16)
    // }

    // function inc2(){
    //     setCount(count => count + 1)
    //     setCount(count => count + 1)
    // }
//    At callback if same name are  there then its works 
    // function inc3(){
    //     setCount(p => p + 1)
    //     setCount(p => p + 1)
    // }

    function inc4(){
        setCount(() => count+1)
        setCount(() => count+1)
    }

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={inc4}>Click</button>
      </div>
    )
}

export default Async;