import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
    <div className="input-container">
    <div className="first">
    <input type="checkbox"/>
    <p>Hello</p>
    </div>  
      <div className="second">
      <input type="checkbox"/>
      <p>second</p>
      </div>
        <div className="third">
        <input type="checkbox" defaultChecked='true'/>
        <p>third</p>
        </div>
          <div className="fourth">
          <input type="checkbox" defaultChecked='true' />
          <p>fourth</p>
          </div>
    </div>
      
    </>
  )
}

export default App
