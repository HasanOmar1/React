import React from 'react'
import { useState } from 'react'

export default function Box() {
    const [display , setDisplay] = useState('show')

    function showHide(){
      display === 'show' ? setDisplay('hide') : setDisplay('show')
    }

return (
    <div>
        <button onClick={showHide}>Show / Hide</button>
        <div className={"box "+display}></div>
    </div>
  )
}
