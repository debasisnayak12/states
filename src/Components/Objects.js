import React, { useState } from "react";

const Objects = () => {
    const [coins, setCoins] = useState({gold:0, silver:0, bronze:0});
    // console.log("coins: ",coins);
    function inGold(){
        setCoins({...coins, gold:coins.gold+1})
    }

    return (
        <div>
            <h1>Gold: {coins.gold} | Silver: {coins.silver} | Bronze: {coins.bronze}</h1>
            <button onClick={inGold}>Increase Gold</button>
            <button onClick={()=> setCoins({...coins,silver:coins.silver+1})}>Increase Gold</button>
            <button onClick={()=> setCoins({...coins,bronze:coins.bronze+1})}>Increase Gold</button>
        </div>
    )
}

export default Objects;