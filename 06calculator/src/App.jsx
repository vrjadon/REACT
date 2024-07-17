import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-2xl font-bold'>Calculator</h1>
      <br/>
      <div className='flex mb-4 space-x-1 px-2 border-4 border-gray-100'>
        <Buttons name={"="}/>
        <Buttons name={"*"}/>
        <Buttons name={"/"}/>
        <Buttons name={"+"}/>
        <Buttons name={"-"}/>
        <Buttons name={"%"}/>
      </div>

     
    </>
  )
}

export default App
