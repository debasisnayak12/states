import React, { useState } from "react";

const Fruits = () => {
    const [fruit, setFruits] = useState("");
//    console.log(fruit);
    const [favFruits, setFavFruits] = useState([]);

    function addFruits(e) {
          e.preventDefault();
          setFavFruits([...favFruits,fruit]);
          setFruits("");
        }
        console.log(favFruits)

       return (
            <div>
                <form onSubmit={addFruits}>
                    <input type="text" placeholder="Enter Fruits"
                    onChange={(e) => setFruits(e.target.value)} 
                    value={fruit}/>
                    <button type="submit">Add Fruits</button>
                </form>

                {favFruits.join(", ")}
            </div>
       )
}

export default Fruits;