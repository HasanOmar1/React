import React from 'react'

export default function Second({addOne, count}) {
    console.log(addOne);
  return (
    <div>
       <div>
      <h1>{count}</h1>
      <button onClick={addOne}>add one</button>
      </div>
    </div>
  )
}
