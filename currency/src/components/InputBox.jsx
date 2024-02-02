import React,{useId} from 'react'

function InputBox({
  label,
  content,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurency='usd',
  amountDisabled=false,
  currencyDisaled=false,
  classname="",
}) {

  const id=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname} justify-between`}>
      <div className=''>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input 
        id={id}
        type="number"
        className='outline-none w-full bg-transparent py-1.5'
        placeholder='Amount'
        disabled={amountDisabled}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full '
        >Currency Type</p>
      <select 
      className='rounded-lg px-1 py-1 bg-grey-100 cursor-pointer outline-none'
      value={selectedCurency}
      onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
      disabled={currencyDisaled}
      >
        {currencyOptions.map((currency)=>(
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default InputBox