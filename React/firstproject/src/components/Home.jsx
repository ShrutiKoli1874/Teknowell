// import React from 'react'

// function home() {
//   let data='hello';
//   function f1(){
//     data='good morning';
//     console.log(data);
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={f1}>change</button>
//     </div>
//   )
// }

// export default home

// useStates function//

import React, { useState } from 'react'

function Home() {

  const[data,setData]=useState("Hello");
  function f1()
  {
    setData("Good Morning");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={f1}>change</button>
    </div>
  )
}

export default Home



