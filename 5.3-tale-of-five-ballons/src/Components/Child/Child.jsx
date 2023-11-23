import React from 'react'
import Balloon from '../Balloon/Balloon'

export default function Child({children}) {
  return (
    <div className="">
        <h3 className='names'>{children.name}</h3>

      <div className='container'>
        <div className={children.color}></div>

    </div>
    </div>
  )
}
