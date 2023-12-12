import React from "react";
import { useCounter } from "../CustomHooks/useCounter";

export default function Counter() {
  const [value, addOne, removeOne, double, divide] = useCounter();

  return (
    <div>
      <h1>First Counter</h1>
      <h1>Current Value : {value} </h1>
      <button onClick={addOne}>add One</button>
      <button onClick={removeOne}>remove One</button>
      <button onClick={double}>double num</button>
      <button onClick={divide}>divide num</button>
    </div>
  );
}
