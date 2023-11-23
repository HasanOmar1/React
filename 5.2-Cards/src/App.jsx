import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import './Components/card.css'

function App() {

  return (
    <>
      <Card img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmh4_yfvoqajFbBvrGoI0fR8F6Ss6r6EUXA&usqp=CAU'
       title="Nice Item"
       description='This item is very nice'
       firstLink='Info'
       secondLink='Link' />

      <Card img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml8_C39RvVlHKbzDtdH2L95cEL5HBi14MXQ&usqp=CAU'
       title="Waterfall?"
       description='Very nice waterfall?'
       firstLink='More'
       secondLink='Link'/>

      <Card img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOEkID7UwDWrVtR9aenB1f5CNjdg_rIgqyA&usqp=CAU'
       title="Trees"
       description='You are looking at green trees!'
       firstLink='Info'
       secondLink='Page'
       />

    </>
  )
}

export default App
