import React from 'react'
import Box3 from './Box3'
export default function Box2() {
    const styles = {
        background:"red"
    }
  return (
    <div className='box1' style={styles}>
        <Box3 />
    </div>
  )
}
