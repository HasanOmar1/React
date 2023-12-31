// import React, { useEffect, useState } from 'react'

// export default function Effect() {
//   const [count, setCount] = useState(1);
//   const [value, setValue] = useState(2);
//   const [value1, setValue1] = useState([]);
//   useEffect(()=>{
//     setValue(value => value + 5)
//   },[])

//   return (
//     <>
//     <button onClick={()=>setCount(count => count + 1)}>Add</button>
//     <div>{count}</div>
//     <button onClick={()=>setValue(value => value + 1 )}>Add</button>
//     <div>{value}</div>
//     </>
//   )
// }

// import React, { useState, useEffect } from 'react'

// export default function Effect() {
//   // const [users, setUsers] = useState([])
//   const [id, setId] = useState(1);
//   const [user, setUser] = useState()

//   useEffect(()=>{
//     const fetchData = async ()=>{
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         const result = await response.json()
//         setUser(result)
//         console.log('new rendering')
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchData()
//   },[id])

//   // const drawUsers = () =>{
//   //   return users.map((user)=>{
//   //     return <div key={user.id}>{user.name}</div>
//   //   })
//   // }

//   return (
//     <>
//     {/* {drawUsers()} */}
//       <input type="number" onChange={(e)=> setId(e.target.value)} />
//      <button onClick={()=>setId(id => id + 1)}>Add</button>
//  <div>{id}</div>

//  <div>
//   <h1>{user?.name}</h1>
//   <h2>{user?.email}</h2>
//  </div>

//     </>
//   )
// }

// import React, { useEffect, useState} from 'react'

// export default function Effect() {
//   const [count, setCount] = useState(1);
//   const [value, setValue] = useState(2)
//     useEffect(()=>{
//       console.log("I'm the count");

//       return ()=>{
//         console.log("I'm the cleanup")
//       }
//     },[count])
//   return (
//     <div>
//        <button onClick={()=>setCount(count => count + 1)}>Add</button>
//     <div>{count}</div>
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    //  console.log(intervalId);
    return () => {
      clearInterval(intervalId);
      console.log("intervalId cleared");
    };
  }, [count]);
  return (
    <div>
      <div>count: {count}</div>
    </div>
  );
}
