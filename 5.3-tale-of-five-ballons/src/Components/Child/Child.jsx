import React from 'react'
import Balloon from '../Balloon/Balloon'

export default function Child({children}) {
  return (
    <div>
        <h3 className='names'>{children.name}</h3>
        <Balloon className={children.color}></Balloon>
    </div>
  )
}
