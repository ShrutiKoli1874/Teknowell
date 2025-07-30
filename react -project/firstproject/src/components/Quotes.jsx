import React, { useState } from 'react'

function Quotes() {
    const[data,setData]=useState(["hello"]);
    function f1()
    {
   
       const arr=["Good Morning","Good Afternoon","Good Night"]
       let randomIndex=Math.floor(Math.random()*arr.length);
       console.log(randomIndex);
       setData(arr[randomIndex]);
        
    }
  return (
    <>
    <h2>{data}</h2>
    <button onClick={f1}>change</button>
    
    
    
    </>

  )
}

export default Quotes