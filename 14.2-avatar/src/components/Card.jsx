import React from "react";
import "./Card.css";
export default function Card({ name, lastName, img }) {
  return (
    <div className="card-container">
      <h2>
        {name} {lastName}
      </h2>
      <img src={img} alt={`${name} Card`} />
    </div>
  );
}
