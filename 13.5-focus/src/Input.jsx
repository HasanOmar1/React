import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const Input = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="InputPage">
      <form>
        <div>
          <label htmlFor="name">NAME : </label>
          <input type="text" name="name" id="name" ref={inputRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
