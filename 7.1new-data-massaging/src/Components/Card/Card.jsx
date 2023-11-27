import React from "react";

export default function Card({ name, birthday, favMeat, favFish }) {
  return (
    <div>
      <p>{name}</p>
      <p>{birthday}</p>
      <p>{favMeat}</p>
      <p>{favFish}</p>
    </div>
  );
}
