
import './App.css'
import {useState} from 'react'
import Box1 from './components/boxes/Box1';
import Box2 from './components/boxes/Box2';
import Box3 from './components/boxes/Box3';
import Box4 from './components/boxes/Box4';
import First from './components/folder/First';
import Second from './components/folder/Second';
import Ex from './components/ex/Ex';
function App() {
  const [title, setTitle] = useState('Bootcamp 10')
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(true);
  const [person, setPerson] = useState({name:"jameel", address:'haifa'})
    // console.log(title);

    // function addOne(){
    //   setCount(count + 1)
    // }

    // function changeBool (){
    //     setBool(bool => !bool)
    // }

    // function changeName(){
    //   setPerson({...person, name: 'Roni'})
    // }

    // setTimeout(()=>{
    //   setFetch('data fetched')
    // }, 2000)
    // let newElement = <div>The bool value is truthy</div>
    // if(!bool){
    //   newElement = <div>The bool value is falsy</div>
    // }
    // console.log(bool);

    // function checkClassName(){
    //   if(personNameClass === 'personName'){
    //     setPersonNameClass('newPerson')
    //   } else {
    //     setPersonNameClass('personName')
    //   }
    // }
  return (
    <>
    {/* {fetch ? <>data fetched</> : <>loading...</> } */}

    {/* {fetch && <>data fetched</> } */}
    {/* <div>{bool ? <div>The bool value is truthy</div> : <div>The bool value is falsy</div>}</div>
    <button onClick={changeBool}>change Bool</button> */}
     {/* <div>
      <h1>{person.name}</h1>
      <h1>{person.address}</h1>
      <button onClick={changeName}>change name</button>
      </div>
      <div>
      <h1 className={personNameClass}>{person.name}</h1>
      <h1>{person.address}</h1>
      <button onClick={checkClassName}>change name</button>
      </div> */}
     {/* <div>
      <h1>{count}</h1>
      <button onClick={addOne}>add one</button>
      </div> */}
    {/* <div><h1>{title}</h1>
      <button onClick={()=> setTitle('new bootcamp')}>change bootcamp name</button>
      </div> 
      <div>
      <h1>{count}</h1>
      <button onClick={addOne}>add one</button>
      </div>
      <div>
      <h1>{count}</h1>
      <button onClick={addOne}>add one</button>
      </div> */}
              
  {/* <Box1>
 <Box2>
   <Box3>
       <Box4 />
       <Box4 />
     </Box3>
 </Box2>
 </Box1>  */}
    {/* <First title={title} setTitle={setTitle} />
    <Second addOne={addOne} count={count}/> */}
    <Ex />
    </>
    
  )
}

export default App



