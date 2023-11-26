import React from 'react'

export default function CustomButton({color , setTitle}) {
  return (
    <>
    
    <button onClick={() => setTitle(`The selected color is: ${color}`)}>{color}</button>
    </>
  )
}
