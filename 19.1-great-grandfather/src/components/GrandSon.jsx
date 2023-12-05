import React, { useContext } from "react";
import { GiftsContext } from "./GiftContext";

export default function GrandSon() {
  const gifts = useContext(GiftsContext);
  return (
    <div>
      <p>{gifts.gifts.join(" , ")}</p>
    </div>
  );
}
