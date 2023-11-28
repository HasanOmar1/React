import { useState } from "react";
import turtlesData from "./data/turtles";
import toppingData from "./data/topping";

import "./App.css";
import Card from "./components/Card/Card";
import OrderItems from "./components/OrderedItems/OrderItems";
function App() {
  const [toppingAdded, setToppingAdded] = useState([]);
  const [message, setMessage] = useState("");

  const getTopping = (name) =>
    toppingData.find((topping) => topping.name === name);

  const handleClickTopping = (toppingName) => {
    if (toppingAdded.length >= 5) {
      setMessage("Reached max amount of toppings");
      return;
    }
    if (toppingAdded.find((topping) => topping.name === toppingName)) {
      setMessage(`Already ordered ${toppingName}`);
      return;
    }
    setMessage("");
    setToppingAdded([...toppingAdded, getTopping(toppingName)]);
  };

  return (
    <main className="main-page">
      <h1>Ninja Turtles</h1>
      <h2>Order pizza with the turtles</h2>
      <section className="cards-container">
        {turtlesData.map((turtle) => {
          return (
            <Card
              key={turtle.id}
              turtle={turtle}
              onClickTopping={handleClickTopping}
            />
          );
        })}
      </section>
      <section
        className={`order-container ${
          toppingAdded.length >= 5 ? "max-amount" : ""
        }`}
      >
        <h2>Our order:</h2>
        <OrderItems toppings={toppingAdded} />
      </section>
      <h3 className="error-message">{message}</h3>
    </main>
  );
}

export default App;
