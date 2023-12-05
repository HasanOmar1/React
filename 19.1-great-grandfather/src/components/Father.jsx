import React, { useContext } from "react";
import Son from "./Son";
import { GiftsContext } from "./GiftContext";

export default function Father() {
  const { gifts, setGifts } = useContext(GiftsContext);

  const handleOnClick = () => {
    setGifts(["car", "house", "plane"]);
  };

  return (
    <div>
      <button onClick={handleOnClick}>My Gifts</button>
      <Son />
    </div>
  );
}
