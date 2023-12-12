import { useEffect } from "react";
import { useRef } from "react";

export default function Box({ width, height, color }) {
  const box = useRef();

  useEffect(() => {
    setTimeout(() => {
      box.current.classList.add("slide");

      setTimeout(() => {
        box.current.style.visibility = "hidden";
      }, 4000);
    }, 1000);
  }, []);

  return (
    <div
      ref={box}
      style={{ width: `${width}px`, height: `${height}px`, background: color }}
    ></div>
  );
}
