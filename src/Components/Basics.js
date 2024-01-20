import React, {useState} from "react";
// let x = useState(0)  // [number, functions]

        // console.log(x[0])
        // console.log(x[1])


// let [y,z]  = useState(0) // [y,z] = [0, f]

let a = 0;

const Basics = () => {
    let [count, setCount] = useState(0);

    function incCount(){
        setCount(count+1);
    }

    function inc(){
        a = a+1;
        console.log(a)
    }

    return (

        <div>
            <h1>{count}</h1>
            <button onClick={incCount}>Increase C</button>

            <h1>{a}</h1>
            <button onClick={inc}>Increase A</button>

        </div>
    )
}

export default Basics;