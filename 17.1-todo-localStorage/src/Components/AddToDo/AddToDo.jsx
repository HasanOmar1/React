import React, { useEffect, useRef, useState } from "react";
import "./AddToDo.css";

export default function AddToDo({ handleAddTask }) {
  const inputValue = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddTask({ name: inputValue.current.value, isDone: false });
    inputValue.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <p>Add todo</p>
        <input type="text" ref={inputValue} />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}
