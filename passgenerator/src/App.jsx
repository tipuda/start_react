import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length ,setlegth]=useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [pass,setPass]=useState('')

  const generatePassword = useCallback(()=>{
    let password='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()_+'
    for(let i=1;i<=length;i++){
      const char= Math.floor(Math.random()*str.length)
      password+=str.charAt(char)
    }

    setPass(password)
  },[length, numberAllowed, charAllowed])

  useEffect(()=>{
    generatePassword();
  },[length, numberAllowed, charAllowed])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(pass)
    refPass.current?.select()
  }

  const refPass=useRef()


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={pass} 
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={refPass}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
      >Copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100} 
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setlegth(e.target.value)}
          name='' id=''/>
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} name='' id=''/>
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} name='' id=''/>
          <label htmlFor="Characters">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
