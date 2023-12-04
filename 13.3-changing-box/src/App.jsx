import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";
import { changeColor } from "./changeColor";
function App() {
  const box = useRef();

  useEffect(() => {
    changeColor(box);
  }, []);

  return (
    <>
      <div className="box" ref={box}></div>
    </>
  );
}

export default App;
