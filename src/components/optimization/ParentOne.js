import React, { useState } from "react";

function ParentOne({ children }) {
  const [counter, setCounter] = useState(0);
  console.log("ParentOne render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        parent : + {counter}
      </button>
      {children}
    </div>
  );
}

export default ParentOne;

// in react, when a parent component renders, react will recursively render all of its child components.
// "unnecessary renders " where the child component goes through the render phase but not the commit phase.
// we can extact the expensive child component and instead pass it down as props to the parent  component.
// whenever there is a re-render caused by a change in the state of the parent component , react will optimize the re-render for you  by knowing that the props has to be referencing the same element before and after the render.
