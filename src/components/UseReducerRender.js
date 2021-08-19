import React, { useReducer } from 'react';
const initialState=0

const reducer=(state,action)=>{
    switch (action) {
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset" :
            return initialState        
        default:
            return state;
    }
}

function UseReducerRender() {

    const [count,dispatch]=useReducer(reducer,initialState);

    console.log("useReducer render")

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch("increment")}>+1</button>
            <button onClick={()=>dispatch("decrement")}>-1</button>
            <button onClick={()=>dispatch("reset")}>reset</button>
        </div>
    )
}

export default UseReducerRender

// useReducer behave the same as useState
// the setter function from a usestate hook will cause the component to re-render
// the exception is when you upate a state hook to the same value as the current state 
// same value after the initial render? the  component will not re-render
// same vlaue after re-render ? react will render that specific component one more time and then bails out any subsequent renders
