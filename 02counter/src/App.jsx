import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'


// function passed in evaluated exprression addvalue function

function App() {
  let [counter, setCounter] =useState(0);
  // let counter = 15; ye ui me reflect nahi karega
  let [sbastractCounter, setSubtractCounter] = useState("");
  const addValue =()=>{
    // console.log("added  value",Math.random());
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);// ye hi sahi tarika hai state ki value update karne ka
  };
  const subtract =()=>{
    console.log("subtract clicked", counter);
    let newvalue = counter - 1;
    setCounter(newvalue);  //counter = main value Subtract depends on counter....So counter must be updated
    setSubtractCounter(newvalue);
  };
  return (
    <>
      <h1>Hello guys </h1>
      <h2>counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button> 
      <br />
      <h2>Substarct value: {sbastractCounter}</h2>
      <button onClick={subtract}>Subtract value {sbastractCounter}</button>
    </>
  )
}

export default App
