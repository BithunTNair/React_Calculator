import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    console.log(e.target.value);
   setValue(value + e.target.value);
   console.log(value);
  };

  const evaluation=()=>{
    try {
      const result= eval(value);
      setValue(result)
    } catch (error) {
      setValue('Error occured!')
    }
  };

  const handleClear=()=>{
    setValue('')
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-2">
          <input
            type="text"
            readOnly
            className="col-span-4 bg-gray-100 text-right text-2xl p-4 rounded-lg mb-2"
            value={value}
          />
          <button className="bg-gray-300 p-4 rounded-lg" value={''} onClick={handleClear} >C</button>
          <button className="col-span-2 bg-gray-300 p-4 rounded-lg" value={'/'} onClick={handleClick} >÷</button>
          <button className="bg-blue-500 text-white p-4 rounded-lg" value={'*'} onClick={handleClick}> ×</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'7'}  onClick={handleClick} >7</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'8'} onClick={handleClick} >8</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'9'} onClick={handleClick} >9</button>
          <button className="bg-blue-500 text-white p-4 rounded-lg" value={'-'} onClick={handleClick} >−</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'4'} onClick={handleClick} >4</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'5'} onClick={handleClick} >5</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'6'} onClick={handleClick} >6</button>
          <button className="bg-blue-500 text-white p-4 rounded-lg" value={'+'} onClick={handleClick} >+</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'1'} onClick={handleClick} >1</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'2'} onClick={handleClick} >2</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'3'} onClick={handleClick} >3</button>
          <button className="col-span-2 bg-gray-200 p-4 rounded-lg" value={'0'} onClick={handleClick} >0</button>
          <button className="bg-gray-200 p-4 rounded-lg" value={'.'} onClick={handleClick} >.</button>
          <button className="bg-blue-500 text-white p-4 rounded-lg"onClick={evaluation} >=</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
