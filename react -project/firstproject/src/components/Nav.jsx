import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav(props) {
  return(
    <>
     <div className='navbar'>
      <div className='logo'>
      <img src={props.t4} alt="" id="t4"/>
       
      </div> 
      {/* <div className='menu'>
         <p>Home</p>
        <p>{props.name}</p>
        <p>{props.t1}</p>
      </div> */}
      <p><a href="./Home">{props.t1}</a></p>
      <p><a href="./Count">{props.t2}</a></p>
      <p><a href="./Quotes">{props.t3}</a></p>

    </div>
    </>
  )
}
export default Nav