import { useState } from 'react'
import './App.css'
import CustomButton from './CustomButton';


function App() {
 
  const [title , setTitle] = useState ('The selected color is : ')
  const colors = ["blue","red","yellow"];

  

  return (
    <>
    <h1>{title}</h1>
    {colors.map((color  , index) =>{
     return <CustomButton color={color}
      key={index}
      setTitle={setTitle}  />
    })}
    

    </>
  )
}

export default App
