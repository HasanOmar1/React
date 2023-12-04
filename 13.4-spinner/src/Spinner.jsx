import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Spinner({ color }) {
  const box = useRef();
  useEffect(() => {
    setTimeout(() => {
      box.current.classList.add("hide");
    }, 5000);
  }, [box]);

  return <div className="box" style={{ background: color }} ref={box}></div>;
}
