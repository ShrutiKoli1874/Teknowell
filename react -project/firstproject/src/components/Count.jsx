import React, { useState } from 'react'
import'./Count.css'

function Count() {

    const[count,setCount]=useState(0);
  return (
   <>

    <div className='count'>
        <button className='btn1' onClick={()=>setCount(count - 1)}>-</button>
        <h1 cl>{count}</h1>
        <button  className='btn1' onClick={()=>setCount(count + 1)}>+</button>

    </div>
   
   </>


    
  )
}

export default Count