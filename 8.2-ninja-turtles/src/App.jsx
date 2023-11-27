import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { data } from "./components/data";

function App() {
  // const [name, setName] = useState(getNames);

  const card = data.map((info, i) => {
    const foodArr = info.pizzaToppings;
    const foodName = foodArr.map((food, i) => {
      return (
        <button key={i} className="btns">
          {food.name}
        </button>
      );
    });
    const foodImg = foodArr.map((food) => food.img);
    return (
      <div className="container" key={i}>
        <Card name={info.name} img={info.img} food={foodName} />
      </div>
    );
  });

  console.log(data);

  return (
    <>
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the turtles</h2>
      <div className="cards-container">{card}</div>
      <h1>Our order:</h1>
    </>
  );
}

export default App;
