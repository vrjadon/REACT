import { useCallback, useState,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [pass,setPass] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed) str+='0123456789'
    if(specialCharAllowed) str+= '!@#$%^&*()-_=+[{]}\|;:,<.>/?'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPass(pass)
},[length,numAllowed, specialCharAllowed,setPass]) 

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(pass)
},[pass])

useEffect(() => {
  passwordGenerator()
}, [length, numAllowed, specialCharAllowed, passwordGenerator])
  return (
    <>
   <div className="max-w-md mx-auto bg-gray-500 rounded-lg text-white m-10 p-4">
      <h1 className="text-orange-500 text-center mb-4">Password Generator</h1>
      <div className="flex items-center">
        <input type="text" 
              value={pass} 
              className="flex-1 bg-gray-300 rounded-l-lg px-4 py-2 focus:outline-none" 
              placeholder="password"
              ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard}
        className="bg-blue-500 text-white rounded-r-lg px-4 py-2 ml-1" >Copy</button>
      </div>
      <div className="flex items-center">
      <input type="range" 
              min={8} 
              max={100} 
              value={length} 
              className='cursor-pointer' 
              onChange={(e)=>{setLength(e.target.value)}}/>
      <label>Length : {length}</label> 
      <input type="checkbox" onClick={(e)=>setNumAllowed((prev)=>!prev)}/>
      <label>Numbers</label>
      <input type='checkbox' onClick={(e)=>setSpecialCharAllowed((prev)=>!prev)}/>
      <label>Special Char</label>
      </div>
   </div>

    </>
  )
}

export default App
