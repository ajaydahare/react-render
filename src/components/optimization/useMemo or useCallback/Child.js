import React from "react";

function Child({ name }) {
  console.log("child Render");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

export default React.memo(Child);

// Do not pass object or function in memoized component because if parent component re-render then object or function reference will change and memoized component re-render un-necessarily
