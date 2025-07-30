import React, { useState } from 'react'


function User() {
    const[UserName,setUserName]=useState("")
    const[Password,SetPassword]=useState("")
    function handleForm(e){

        e.preventdefault();
        // alert("form Submiited");
        

    }
    function f1(e){
        console.log(e.target.value);
        setUserName(e.target.value);
    }
    function f2(e){
        console.log(e.target.value);
        SetPassword(e.target.value);
    }
   

  return (
    <>
       <div style={{alignItems:"center",padding:"20px",margin:"28px",textAlign:"center",border:"1px solid black",backgroundColor:"palegreen" ,width:"500px"}} >
        <form onSubmit={handleForm}>
         Enter UserName <input type="text" onChange={f1}/><br/><br/>
         Enetr Password <input type="password"/> <br/><br/>
         
         <button>Submit</button>
</form>
</div>
    </>
  )
}

export default User