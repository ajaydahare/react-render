import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);
  console.log("Parent render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>counter +1</button>
      <button onClick={() => setCounter(0)}>counter 0</button>
      <button onClick={() => setCounter(5)}>counter 5</button>
      <Child />
    </div>
  );
}

export default Parent;

// conclusion
// when a parent component renders , react will recursively render all of its child components.
//  New state same as old state after initial render , both parent and child do not re-render
//  New state same as old state after re-render , Parent re-render one more time but child never re-render
