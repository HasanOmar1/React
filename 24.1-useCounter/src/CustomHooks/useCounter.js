import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

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

  return [counter, addOne, removeOne, double, divide];
};
