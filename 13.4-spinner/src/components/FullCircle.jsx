import { useRef } from "react";
import "./Spinner.css";
import { useEffect } from "react";

export default function FullCircle() {
  const fullCircle = useRef();
  useEffect(() => {
    setTimeout(() => {
      fullCircle.current.classList.add("hide");
    }, 5000);
  }, []);
  return (
    <div class="container">
      <div class="full-circle" ref={fullCircle}></div>
    </div>
  );
}
