import React, { useState, useRef } from "react";

export default function UseRef() {
  const [name, setName] = useState({
    firstName: "Idan",
    lastName: "Rotenberg",
  });

  // const firstName = useRef()
  const lastName = useRef();

  // console.log(firstName)
  function handleInput(e) {
    setName({ ...name, firstName: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName({ ...name, lastName: lastName.current.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name.firstName} onChange={handleInput} />
        <input type="text" ref={lastName} defaultValue={name.lastName} />
        <button type="submit"> Submit </button>
      </form>
      Full name: {name.firstName} {name.lastName}
    </div>
  );
}
