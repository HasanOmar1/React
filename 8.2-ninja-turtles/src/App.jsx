import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { data } from "./components/data";

function App() {
  const [foodImg, setFoodImg] = useState("");

  const card = data.map((info, i) => {
    const foodArr = info.pizzaToppings;
    const foodName = foodArr.map((food, i) => {
      function handleImg() {
        setFoodImg(() => {
          return (
            <div className="food-container">
              <p>{food.name}</p>
              <img src={food.img} alt={food.name} />
            </div>
          );
        });
      }
      return (
        <button key={i} className="btns" onClick={handleImg}>
          {food.name}
        </button>
      );
    });
    return (
      <div className="container" key={i}>
        <Card name={info.name} img={info.img} food={foodName} />
      </div>
    );
  });

  // console.log(data);

  return (
    <>
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the turtles</h2>
      <div className="cards-container">{card}</div>
      <h1>Our order:</h1>
      <div className="food-img">{foodImg}</div>
    </>
  );
}

export default App;
