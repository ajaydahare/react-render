import React from "react";
import ChildOne from "./components/optimization/ChildOne";
import ParentOne from "./components/optimization/ParentOne";

function App() {
  return (
    <div>
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
