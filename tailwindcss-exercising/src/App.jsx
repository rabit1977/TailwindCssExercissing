import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=''>
        <div className='columns-3 shadow-xl bg-yellow-500 p-2'>
          <div className=' bg-fuchsia-500   p-4 rounded-lg text-white font-semibold'>
            01
          </div>
          <div className='bg-fuchsia-500 p-4 rounded-lg text-white font-semibold'>
            02
          </div>
          <div className='flex-1 bg-fuchsia-500 p-4 rounded-lg text-white font-semibold'>
            03
          </div>
        </div>
        <div className='columns-3 shadow-xl rounded-xl overflow-hidden my-4'>
          <img
            className='w-full   aspect-square'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full  aspect-video'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full  aspect-square'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full  aspect-video'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full aspect-square'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full aspect-video'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full aspect-square'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full aspect-video'
            src='/public/ferrari.jpg'
            alt=''
          />
          <img
            className='w-full aspect-square'
            src='/public/ferrari.jpg'
            alt=''
          />
        </div>
      </div>
      <div>
        <div className='max-w-xs  m-auto shadow-lg border-4 border-transparent hover:border-amber-300 bg-rose-500 rounded-2xl text-white p-4'>
          <div className=' w-full text-left flex items-center justify-center gap-4'>
            <img
              src='ferrari.jpg'
              alt=''
              className='w-16 h-16 rounded-full border-4'
            />
            <div className='flex flex-col'>
              <strong>Andi Ebibi</strong>
              <span className=''>Technical advisor</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-amber-300 p-4 my-4 rounded-2xl'>
        <span className='grid justify-items-center grid-cols-3 gap-4'>
          <span className='p-2 bg-rose-500 border-4  rounded-full w-12 h-12'>
            1
          </span>
          <span className='p-2 bg-rose-500 border-4  rounded-full w-12 h-12'>
            2
          </span>
          <span className='p-2 bg-rose-500 border-4  rounded-full w-12 h-12'>
            3
          </span>
          <span className='p-2 bg-rose-500 border-4  rounded-full w-12 h-12'>
            4
          </span>
          <span className='p-2 bg-rose-500 border-4  rounded-full w-12 h-12'>
            5
          </span>
          <span className='p-2 bg-rose-500 border-4  rounded-full w-12 h-12'>
            6
          </span>
        </span>
      </div>
    </>
  );
}

export default App;
