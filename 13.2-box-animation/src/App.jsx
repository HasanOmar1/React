import { useEffect } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();

  useEffect(() => {
    setTimeout(() => {
      box1.current.classList.add("slide");
      box2.current.classList.add("slide");
      box3.current.classList.add("slide");
      box4.current.classList.add("slide");
      setTimeout(() => {
        box1.current.style.visibility = "hidden";
        box2.current.style.visibility = "hidden";
        box3.current.style.visibility = "hidden";
        box4.current.style.visibility = "hidden";
      }, 4000);
    }, 1000);
  }, []);
  return (
    <>
      <div className="box1" ref={box1}></div>
      <div className="box2" ref={box2}></div>
      <div className="box3" ref={box3}></div>
      <div className="box4" ref={box4}></div>
    </>
  );
}

export default App;
