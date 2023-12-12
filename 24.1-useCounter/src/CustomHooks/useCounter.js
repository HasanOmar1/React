import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const value = counter;

  const addOne = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const removeOne = () => {
    setCounter((prevCount) => prevCount - 1);
  };
  const double = () => {
    setCounter((prevCount) => prevCount * 2);
  };
  const divide = () => {
    setCounter((prevCount) => prevCount / 2);
  };

  return [value, addOne, removeOne, double, divide];
};
