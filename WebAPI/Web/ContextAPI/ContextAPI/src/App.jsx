import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context';



function App() {

  let {state, dispatch} = useContext(GlobalContext);
  console.log(state);

  let {age, username} = state;

function changeAge(){
    dispatch({
    type: 'CHANGE_AGE',
    payload: 567
  })
}

useEffect(()=>{
  changeAge()
},[])

  

  return (
    <>
    <h1>Age: {age}</h1>
    <h1>User Name: {username}</h1>
     
    </>
  )
}

export default App
