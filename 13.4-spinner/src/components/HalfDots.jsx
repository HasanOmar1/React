import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function HalfDots() {
  const halfDots = useRef();
  useEffect(() => {
    setTimeout(() => {
      halfDots.current.classList.add("hide");
    }, 5000);
  }, []);

  return (
    <div class="half-dots" ref={halfDots}>
      <div class="doto"></div>
      <div class="doto"></div>
      <div class="doto"></div>
    </div>
  );
}
