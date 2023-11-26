import React from "react";
import { useState } from "react";

export default function Checkbox({ index, text }) {
  const [checked, setChecked] = useState(index > 1);

  function handleChecked() {
    setChecked((checked) => !checked);
  }
  return (
    <>
      <div className="container">
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <p>{text}</p>
      </div>
    </>
  );
}
