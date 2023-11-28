import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { data } from "./components/data";

function App() {
  const [message, setMessage] = useState("");
  const [orderedToppings, setOrderedToppings] = useState([]);

  const onClickTopping = (topping) => {
    if (orderedToppings.length >= 5) {
      setMessage("Max amount of topping!");
      return;
    }
    if (
      orderedToppings.find(
        (currentTopping) => currentTopping.name === topping.name
      )
    ) {
      setMessage(`Already ordered ${topping.name}!`);
      return;
    }

    setMessage("");
    setOrderedToppings([...orderedToppings, topping]);
  };
  return (
    <>
      <h1>Ninja Turtles</h1>
      <h2>Order Pizza with the turtles</h2>
      <div className="cards-container">
        {data.map((turtle) => (
          <div key={Math.random()} className="container">
            <Card
              food={turtle.pizzaToppings}
              img={turtle.img}
              name={turtle.name}
              onClickTopping={onClickTopping}
            />
          </div>
        ))}
      </div>
      <h1>Our order:</h1>
      <div>
        <div
          className={`food-img ${
            orderedToppings.length > 5 ? "error-img" : ""
          }`}
        >
          {orderedToppings.map((item) => (
            <div
              key={Math.random()}
              className={`${
                orderedToppings.length > 4
                  ? "food-container-error"
                  : "food-container"
              }`}
            >
              <p>{item.name}</p>
              <img src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="error-message-container">
        <h1 className="error">{message}</h1>
      </div>
    </>
  );
}

export default App;
