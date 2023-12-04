import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function FullDots() {
  const fullDots = useRef();
  useEffect(() => {
    setTimeout(() => {
      fullDots.current.classList.add("hide");
    }, 5000);
  }, []);

  return (
    <div class="full-dots" ref={fullDots}>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  );
}
