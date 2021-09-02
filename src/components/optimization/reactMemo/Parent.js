import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("ajay");
  console.log("Parent render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter} : +1</button>
      <button onClick={() => setName("ajju")}>change name</button>
      <Child name={name} />
    </div>
  );
}

export default Parent;

// conclusion
// in react , when a parent component renders , a child component might un-necessarily render.
// to optimize this behabiour , we can use React.memo and pass in the child component.
// React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed
