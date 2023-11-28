import { useRef, useState } from "react";
import "./App.css";
import video from "./assets/SampleVideo_1280x720_30mb.mp4";

function App() {
  const vid = useRef();

  function handlePlay() {
    vid.current.play();
  }

  function handlePause() {
    vid.current.pause();
  }
  return (
    <>
      <div className="video-container">
        <video ref={vid} width={`100%`} src={video}></video>
      </div>
      <div className="btns">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </>
  );
}

export default App;
