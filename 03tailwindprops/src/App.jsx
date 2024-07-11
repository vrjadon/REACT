import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : "Raman",
    age : "68"
  }
  let newArr = [1,2,3]
  return (
    <>
    <Card name='Vishwas' btnText='Visit my Profile'/>
    <Card name="Elon" btnText = 'Check out my new Venture'/>
    </>
  )
}

export default App
