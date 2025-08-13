import React, { useReducer } from 'react'

function Hook() {
    const initValue=0;
    const reducer = (state,action)=>{
        if(action.type==='INC'){

            return(state=state+1)
        }
        if(action.type === 'DEC'){
            
            return(state=state-1)
        }
        return state;}
    const app=() =>{
        const [count,dispatch]=useReducer[reducer,initValue];
    }
  return (
    <div>
        <div className="container">
            <button onClick={()=> dispatch({type:'INC'})}>INCREMENT</button>
            {/* <h1>{Count}</h1> */}
            <button onClick={()=>dispatch({type:'DEC'})}>DECREMENT</button>
        </div>
    </div>
  )
}

export default Hook