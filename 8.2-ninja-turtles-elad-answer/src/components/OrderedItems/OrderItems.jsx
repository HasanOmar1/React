/* eslint-disable react/prop-types */

const OrderItems = ({toppings}) => {
  return (
    <div className="ordered-items">
        {toppings.map(topping=><div key={topping.id}>
            <h3>{topping.name}</h3>
            <img src={topping.img} alt={topping.name} />
        </div>)}
    </div>
  )
}

export default OrderItems