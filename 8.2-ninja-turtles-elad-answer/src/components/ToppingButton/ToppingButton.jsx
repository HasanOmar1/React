/* eslint-disable react/prop-types */

const ToppingButton = ({toppingName,onClickTopping}) => {

    const handleClick = () =>{
        onClickTopping(toppingName)
    }

  return (
    <button onClick={handleClick}>{toppingName}</button>
  )
}

export default ToppingButton