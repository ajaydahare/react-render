import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("ajay");

  const person = {
    fname: "ajju",
    lname: "pawar",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("Parent render");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter} : +1</button>
      <button onClick={() => setName("ajju")}>change name</button>
      {/* <Child name={name} person={memoizedPerson} /> */}
      <Child name={name} handleClick={memoizedHandleClick} />
    </div>
  );
}

export default Parent;
