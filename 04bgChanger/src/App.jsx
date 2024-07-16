import { useState } from 'react'
import './App.css'
function App() {
  const [color,setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
     <div className='fixed inset-0 flex flex-wrap justify-center items-center '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor('red')} className='outline-none text-white px-4 py-1 rounded full shadow-lg' style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=>setColor('blue')} className='outline-none  text-white px-4 py-1 rounded full shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=>setColor('green')} className='outline-none   text-white px-4 py-1 rounded full shadow-lg' style={{backgroundColor: "green"}}>Green</button>
      </div>
     </div>
    </div>
  )
}

export default App
