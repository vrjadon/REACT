import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5
  let [counter,setCounter] = useState(15)

  // const addValue = () => {
  //   if(counter<20){
  //     counter++
  //     setCounter(counter)
  //     console.log("clicked",counter);
  //   }
  // }
  const addValue = () => {
   setCounter(prevCounter => prevCounter + 1)
   setCounter(prevCounter => prevCounter + 1)
   setCounter(prevCounter => prevCounter + 1)
   setCounter(prevCounter => prevCounter + 1)
  }

  const decreaseValue = ()=>{
    if(counter>0){
      counter--
    setCounter(counter)
    console.log("clicked",counter);
    }
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button> <br/>
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
