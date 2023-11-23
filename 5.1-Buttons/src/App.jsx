import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import './components/button.css'


function App() {

  return (
    <>
      <Button cssStyle='bold' title="Important"/>
      <Button  title="Not Important"/>
    </>
  )
}

export default App
