import React, { useRef, useState, useEffect } from "react";

export default function Input() {
  const [inputVal, setInputVal] = useState("");

  function handleOnChange(e) {
    setInputVal(e.target.value);
    console.log(inputVal);
  }

  return (
    <div>
      <form action="">
        <input type="text" onChange={handleOnChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
