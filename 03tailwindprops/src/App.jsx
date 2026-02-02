import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let Myobj={
    name:"Sipu Kumar",
    Age: 21
  }  // object to be passed as prop to Card component
  let Array=[1,2,3,4,5]; // array to be passed as prop to Card component
  return (
    <>
      <h1 className='bg-green-400'>Hii</h1>
      <br />
      <Card username="Sipu Kumar" someObj={Myobj} Array={Array}/>  // passings props to Card component
      <Card btntext="Visit me"/>
    </>
  )
}

export default App
