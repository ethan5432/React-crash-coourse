import React, { useState } from 'react';



function Counter() {
const [arr, setArr] = useState([1])

  function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }
    
    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }
    
    return (
        <div>
        <button onClick={addPlus}>+</button>
        <button  onClick={addMinus}>-</button>
        {arr}
        </div>)
}

 export default Counter