import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { data } from "./components/data";

function App() {
  const { message, setMessage } = useState("");
  const [foodImg, setFoodImg] = useState([]); // use setfoodimg({...foodImg, ...})

  const card = data.map((info, i) => {
    const foodArr = info.pizzaToppings;
    const foodName = foodArr.map((food, i) => {
      // const getTopping = (name) =>
      //   foodArr.find((topping) => topping.name === name);
      // function handleClickTopping() {
      //   if (foodImg.length >= 5) {
      //     setMessage(`Reached max amount of toppings`);
      //     return;
      //   }
      //   if (foodArr.find((topping) => topping.name === name)) {
      //     setMessage(`Already ordered`);
      //   }
      // }

      function handleImg() {
        setFoodImg(() => {
          return (
            <div
              className={`food-container ${
                foodImg.length > 5 ? "error-img" : ""
              }`}
            >
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
      <div>
        <div className="food-img">{foodImg}</div>
      </div>
      <div className="error-message-container">
        <h1 className="error">{message}</h1>
      </div>
    </>
  );
}

export default App;
