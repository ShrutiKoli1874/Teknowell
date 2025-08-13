import React, { useState } from 'react'

function Userform() {
  const[UserName,setUserName]=useState("")
  const[Password,setPassword]=useState("")
  const[formData,setFormData]=useState([]);
  function handleform(e){
    e.preventDefault();
    alert("form submitted");
    setFormData([UserName,Password])
  }
  function f1(e){
    console.log(e.target.value);
    setUserName(e.target.value);
  }
  function f2(e){
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <> 
    <div style={{backgroundColor:"aliceblue",textAlign:"center",margin:"20px",padding:"28px",border:"1px solid black",width:"500px"}}>
    
    <form onSubmit={handleform}>
        Enter UserName <input type="text" onChange={f1}/><br/>
        {UserName.length==0 ? " ":(UserName.length)< 8 ? <span style={{color:"red"}}>UserName should be grater than 8 charetor </span>: <span style={{color:"green"}}>Username valid</span>}<br/><br/>
        Enter Password <input type="password" onChange={f2}/><br/>
        {Password.length==0 ? " ":(Password.length)< 8 ? <span style={{color:"red"}}>Password should be grater than 8 charetor </span>: <span style={{color:"green"}}>Password valid</span>} <br/> 
        <button>Submit</button>

    </form>
    </div>
    <hr/>
    
    UserName: {formData[0]}<br/>
    Paswword: {formData[1]}

    </>
  )
}

export default Userform