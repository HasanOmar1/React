import { useState } from "react";
import mountain from "./assets/mountain.png";
import blackMountain from "./assets/mountain-black.png";
import nature from "./assets/nature.jpg";
import blackNature from "./assets/nature-black.jpg";
import "./App.css";
import { useRef } from "react";

function App() {
  const natureRef = useRef();
  const mountainRef = useRef();

  function handleHoverMountain() {
    mountainRef.current.src = mountain;
  }
  function handleUnHoverMountain() {
    mountainRef.current.src = blackMountain;
  }

  function handleHoverNature() {
    natureRef.current.src = nature;
  }
  function handleUnHoverNature() {
    natureRef.current.src = blackNature;
  }
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img
            ref={mountainRef}
            onMouseOver={handleHoverMountain}
            onMouseLeave={handleUnHoverMountain}
            src={blackMountain}
          />
          <img
            src={blackNature}
            ref={natureRef}
            onMouseOver={handleHoverNature}
            onMouseLeave={handleUnHoverNature}
          />
        </div>
      </div>
    </>
  );
}

export default App;
