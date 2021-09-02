import React, { useState } from "react";

const initialState = {
  fname: "ajay",
  lname: "pawar",
};
function ObjectUseState() {
  const [person, setPerson] = useState(initialState);

  const changePerson = () => {
    // person.fname = "aman";  // do not mutted objects directly ,it does not work
    // person.lname = "pawar";
    // setPerson(person);

    const newPerson = { ...person };
    newPerson.fname = "aman";
    newPerson.lname = "pawar";
    setPerson(newPerson);
  };

  //   setPerson({...person,fname:"aman",lname:"pawar"}) // do this instead of above code

  console.log("Object useState");
  return (
    <div>
      <h1>
        {person.fname} {person.lname}
      </h1>
      <button onClick={changePerson}>Change Person</button>
    </div>
  );
}

export default ObjectUseState;

// Note : react work same for array

// conclusion
// 1) mutating an object or an array as state will not cause a re-render when used with the useState or useReducer hook
// 2) To re-render , make make a copy of the existing state , modify as necessary and then pass the new state  to the setter function or while returning from a reducer function.
