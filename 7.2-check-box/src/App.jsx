import { useState } from "react";
import "./App.css";
import "./style.css";
import Checkbox from "./Checkbox";

function App() {
  const checkboxesTexts = [
    "I read the terms of the app",
    "I accept the terms of the app",
    "I want to get weekly news letter",
    "I want to get sales and offers",
  ];

  return (
    <>
      <div className="input-container">
        {checkboxesTexts.map((list, index) => {
          return <Checkbox key={index} text={list} index={index} />;
        })}
      </div>
    </>
  );
}

export default App;
