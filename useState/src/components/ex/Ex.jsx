import React, { useState } from 'react'
import "./ex.css"
export default function Ex() {
    const [count, setCount] = useState(0);

    function inc(){
        setCount(count => count + 1);
    }
    function dec(){
        setCount(count => count - 1);
    }
    
  return (
    <div>
        <h1 className={count > 0 ? 'green': count === 0 ?'black' : 'red' }>{count}</h1>
        <div>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    </div>
  )
}
