import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount]=useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
   console.log(options);
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    
    <div className='w-full h-screen bg-cover flex flex-wrap justify-center items-center bg-no-repeat'
    style={{backgroundImage: 'url(https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
    <div className='w-full '>
      <div className='w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form className='' onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
        <div className='w-full mb-2 '>
          <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectedCurency={from}
          />

        </div>
        <div className='relative w-full h-0.5'>
          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}
          >Swap</button>

        </div>
        <div className='w-full mb-3'>
          <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          amountDisabled={true}
          onCurrencyChange={(currency)=>setTo(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectedCurency={to}
      
          />

        </div>
        <button
        type='submit'
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

      </form>
      </div>
    </div>
    </div>
      
    
  )
}

export default App
