import React from "react";

export default function Ordered({ orderedToppings }) {
  return (
    <div className={`food-img`}>
      {orderedToppings.map((item) => (
        <div
          key={Math.random()}
          className={`${
            orderedToppings.length >= 5
              ? "food-container-error"
              : "food-container"
          }`}
        >
          <p>{item.name}</p>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
