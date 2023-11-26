import React from 'react'
import './style.css'
import Box2 from './Box2'
import { FaFacebook } from "react-icons/fa";
export default function Box1({children}) {
    console.log(children);
  return (
    <div className='box1'>
        {children}
        <Box2 />
    </div>
  )
}
