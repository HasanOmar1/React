import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function HalfCircle() {
  const HalfCircle = useRef();
  useEffect(() => {
    setTimeout(() => {
      HalfCircle.current.classList.add("hide");
    }, 5000);
  }, []);

  return <div class="half-circle" ref={HalfCircle}></div>;
}
