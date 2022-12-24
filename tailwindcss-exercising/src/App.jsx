import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='box-border overflow-x-auto border-4 flex border-emerald-500 p-8 shadow-lg'>
      <div className='flex basis-1/2 shadow-xl m-4'>
        <div className='basis-1 bg-fuchsia-500  m-2 p-4 rounded-lg text-white font-semibold'>
          01
        </div>
        <div className=' basis-1/2 bg-fuchsia-500 m-2 p-4 rounded-lg text-white font-semibold'>
          02
        </div>
        <div className='basis-1/4 bg-fuchsia-500 m-2 p-4 rounded-lg text-white font-semibold'>
          03
        </div>
      </div>
      <div className='flex flex-row basis-1/2 shadow-xl m-4'>
        <div className='basis-1/4 bg-fuchsia-500  md:basis-1/3 m-2 p-4 rounded-lg text-white font-semibold'>
          01
        </div>
        <div className='basis-1/4 bg-fuchsia-500  md:basis-1/3 m-2 p-4 rounded-lg text-white font-semibold'>
          02
        </div>
        <div className='basis-1/2 bg-fuchsia-500  md:basis-1/3 m-2 p-4 rounded-lg text-white font-semibold'>
          03
        </div>
      </div>
    </div>
  );
}

export default App;
