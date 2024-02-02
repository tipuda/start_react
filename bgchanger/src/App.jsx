import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setcolor] = useState('olive')

  // function changeColor(color){
  //   setcolor(color);
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <p className=' font-serif text-black text-6xl px-5 py-5'>Hi, I'm Shiv</p>
      <div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
            // onClick={()=> changeColor('red')}
            onClick={()=> setcolor('red')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black' 
            style={{backgroundColor: 'red'}}>Red</button>
            <button 
            // onClick={()=> changeColor('green')}
            onClick={()=> setcolor('green')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black ' 
            style={{backgroundColor: 'green'}}>Green</button>
            <button 
            // onClick={()=> changeColor('pink')}
            onClick={()=> setcolor('pink')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black '
            style={{backgroundColor: 'pink'}}>Pink</button>
            <button 
            // onClick={()=> changeColor('pink')}
            onClick={()=> setcolor('violet')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black '
            style={{backgroundColor: 'violet'}}>Violet</button>
            <button 
            // onClick={()=> changeColor('pink')}
            onClick={()=> setcolor('orange')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black '
            style={{backgroundColor: 'orange'}}>Orange</button>
            <button 
            // onClick={()=> changeColor('pink')}
            onClick={()=> setcolor('blue')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black '
            style={{backgroundColor: 'blue'}}>Blue</button>
            <button 
            // onClick={()=> changeColor('pink')}
            onClick={()=> setcolor('grey')}
            className='outline-none px-5 py-1 rounded-full shadow-lg text-black '
            style={{backgroundColor: 'grey'}}>Gray</button>

        </div>
      </div>
    </div>
  )
}

export default App
