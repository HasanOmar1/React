import React from 'react'

export default function First({title, setTitle}) {
    console.log(title);
  return (
    <div>First
        <h1>{title}</h1>
        <button onClick={()=> setTitle("new Bootcamp changed by child")}>change title</button>
    </div>
  )
}
