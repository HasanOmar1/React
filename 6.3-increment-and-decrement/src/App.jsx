import { useState } from 'react'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    if(count < 10 && count >= -10){
    setCount(count => count + 1)
    }
    
  }
  
  function decrement(){
    if(count <= 10 && count > -10){
    setCount(count => count - 1)
    }
    
  }
 
  return (
    <>
        <h1 className={count > 0 ? 'green': count === 0 ? 'black': 'red'}>{count}</h1>
      <div className="btn-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App


// useEffect(()=>{
//   if(count < 0 ){
//     setColor('red')
//   } else if(count > 0){
//     setColor('green')
//   } else {
//     setColor('black')
  
//   }
//  },[count])