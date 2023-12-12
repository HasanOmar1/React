import React from "react";
import { useCounter } from "../CustomHooks/useCounter";

export default function AnotherCounter() {
  const [counter, addOne, removeOne, double, divide] = useCounter(100);
  return (
    <div>
      <h1>Second Counter</h1>
      <h1>Current Value : {counter} </h1>
      <button onClick={addOne}>add One</button>
      <button onClick={removeOne}>remove One</button>
      <button onClick={double}>double num</button>
      <button onClick={divide}>divide num</button>
    </div>
  );
}
