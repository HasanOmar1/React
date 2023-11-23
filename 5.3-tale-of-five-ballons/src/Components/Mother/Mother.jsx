import React from 'react'
import Child from '../Child/Child'

export default function Mother() {
    const kids= [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
        ]
 

  return (
    <div>
        <h1>A Tale of Five Balloons</h1>
        <div className="container">
          {kids.map((kid)=>{
            return <Child>{kid}</Child>
          })}
        </div>


    </div>
  )
}
