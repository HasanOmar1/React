import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const data = ['Hello' , 'World']
const dataJoined = data.join(' ')

const number1 = 5;
const number2 = 6;

const string = "I love React!"
  return (
    <>
    <div>
      <h1>{dataJoined}</h1>
    </div>

    <div>
      <h1>{number1} + {number2} = {number1 + number2}</h1>
    </div>

    <div>
      <h1>The string's length is {string.length}</h1>
    </div>
       
    </>
  )
}

export default App
