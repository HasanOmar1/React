import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { data } from "./components/data";
import Ordered from "./components/Ordered";

function App() {
  const [message, setMessage] = useState("");
  const [orderedToppings, setOrderedToppings] = useState([]);

  const onClickTopping = (topping) => {
    if (orderedToppings.length > 4) {
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
        <Ordered orderedToppings={orderedToppings} />
      </div>
      <div className="error-message-container">
        <h1 className="error">{message}</h1>
      </div>
    </>
  );
}

export default App;
