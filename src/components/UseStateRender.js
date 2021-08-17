import React, { useState } from 'react'

function UseStateRender() {
    const [counter, setCounter] = useState(0);
    console.log("useState render")
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>counter +1</button> 
            <button onClick={()=>setCounter(0)}>counter 0</button> 
            <button onClick={()=>setCounter(5)}>counter 5</button> 

        </div>
    )
}

export default UseStateRender

// the setter function from a usestate hook will cause the component to re-render
// the exception is when you upate a state hook to the same value as the current state 
// same value after the initial render? the  component will not re-render
// same vlaue after re-render ? react will render that specific component one more time and then bails out any subsequent renders
 
