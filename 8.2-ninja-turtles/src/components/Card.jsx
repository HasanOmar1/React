import React from "react";
import "./style.css";

export default function Card({ name, img, food, onClickTopping }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <h3>Toppings:</h3>
      <div>
        {food.map((toppingBtn, i) => {
          return (
            <button
              key={i}
              className="btns"
              onClick={() => onClickTopping(toppingBtn)}
            >
              {toppingBtn.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
