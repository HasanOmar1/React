/* eslint-disable react/prop-types */
import ToppingButton from "../ToppingButton/ToppingButton"
import "./Card.css"

const Card = ({turtle, onClickTopping}) => {
  return (
    <section className="card-container">
        <div className="card">
            <h3>{turtle.name}</h3>
            <img src={turtle.image} alt={turtle.name} />
            <h3>Toppings:</h3>
            <div className="toppings-container">
            {turtle.toppings.map((topping)=><ToppingButton key={Math.random()} onClickTopping={onClickTopping} toppingName={topping} />)}
            </div>
        </div>
    </section>
  )
}

export default Card