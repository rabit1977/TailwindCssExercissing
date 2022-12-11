import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <>
      <div className='container mx-auto bg-indigo-300 mb-4 rounded-lg h-auto flex flex-col p-6 text-slate-800'>
        <h1 className='text-4xl mb-7 '>TailwindCss exercising</h1>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <p className='text-left basis-1/4 md:basis-1/3  first-letter:text-6xl  first-letter:text-red-600 first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif grow md:grow-0 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left  basis-1/2 md:basis-1/3 first-letter:text-6xl  first-letter:text-blue-600 first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left  basis-1/2 md:basis-1/3 first-letter:text-6xl first-letter:text-yellow-400  first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className=' col-span-2 text-left basis-1/4 md:basis-1/3  first-letter:text-6xl  first-letter:text-red-600 first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif grow md:grow-0 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left  basis-1/2 md:basis-1/3 first-letter:text-6xl  first-letter:text-blue-600 first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left basis-1/2 md:basis-1/3 first-letter:text-6xl first-letter:text-yellow-400  first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left col-span-2  basis-1/2 md:basis-1/3 first-letter:text-6xl first-letter:text-yellow-400  first-letter:font-bold tracking-wide bg-slate-100 p-4 rounded-md shadow-md leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
        </div>
      </div>
      <div className='container mx-auto bg-red-500 h-auto  flex flex-col p-6 text-white'>
        <h1 className='text-4xl mb-7 '>TailwindCss exercising</h1>
        <div>
          <p className='text-left first-letter:text-6xl first-letter:font-bold tracking-wide leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            minus, rerum fugiat, ratione eius amet distinctio aliquam alias
            earum sed maxime recusandae atque ducimus beatae aperiam nostrum
            unde ut sequi est delectus dolorum molestiae necessitatibus illo
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left first-letter:text-6xl first-letter:font-bold tracking-wide leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            minus, rerum fugiat, ratione eius amet distinctio aliquam alias
            earum sed maxime recusandae atque ducimus beatae aperiam nostrum
            unde ut sequi est delectus dolorum molestiae necessitatibus illo
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
          <p className='text-left first-letter:text-6xl first-letter:font-bold tracking-wide leading-relaxed font-serif'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            minus, rerum fugiat, ratione eius amet distinctio aliquam alias
            earum sed maxime recusandae atque ducimus beatae aperiam nostrum
            unde ut sequi est delectus dolorum molestiae necessitatibus illo
            perferendis debitis eligendi! A qui ab eius corrupti impedit,
            perspiciatis!
          </p>
        </div>
      </div>
      );
    </>
  );
}

export default App;
