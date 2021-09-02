import React from "react";

function Child({ name }) {
  console.log("child render");
  return <div>child component {name}</div>;
}

export default React.memo(Child);

// in react , when a parent component renders , a child component might un-necessarily render.
// to optimize this behabiour , we can use React.memo and pass in the child component.
// React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed
