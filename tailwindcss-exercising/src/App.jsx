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
        <div className='max-w-xs  m-auto shadow-lg border-4 border-transparent  bg-rose-500 border-b-2  text-white p-4'>
          <div className=' w-full text-left flex items-center justify-center gap-4'>
            <img
              src='ferrari.jpg'
              alt=''
              className='w-16 h-16 rounded-full border-4'
            />
            <div className='flex flex-col text-left'>
              <strong>Andi Ebibi</strong>
              <span className=''>Technical advisor</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-amber-300 p-4 my-4 border-b-2 '>
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
      <div className='isolate  hover:isolation-auto'>
        <img src='ferrari.jpg' alt='' className='w-96 h-60 float-right' />
        <img src='ferrari.jpg' alt='' className='w-96 h-60 float-left' />
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          architecto harum illum hic a aperiam sit, veniam ex dolore omnis,
          magni quo possimus. Facilis ab, officiis possimus, voluptatem
          temporibus dignissimos voluptate neque tenetur in magni, unde animi
          laudantium vero quisquam ut cupiditate culpa corrupti repudiandae
          harum? Ipsa, maiores sapiente aliquid commodi reprehenderit rerum
          laboriosam minima id natus ratione voluptates reiciendis ex ullam
          molestias saepe magni est distinctio enim consectetur officia quos
          vero. Voluptas consequatur atque laudantium nesciunt possimus fuga
          mporibus dicta.
        </p>
      </div>
      <div className='bg-indigo-300 container mx-auto rounded-xl'>
        <img
          src='ferrari.jpg'
          className='object-cover bg-red-500 h-48 w-96 mx-auto p-2'
        />
      </div>
      <div className='mt-4 -mb-3 border-2 border-black'>
        <div className='not-prose relative bg-slate-200 rounded-xl overflow-hidden dark:bg-slate-800/25'>
          <div className='relative rounded-xl overflow-auto p-8'>
            <div className='overflow-auto h-72 relative max-w-sm mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5'>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='ferrari.jpg' />
                <div className='flex flex-col text-left'>
                  <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                    Andrew Alfred
                  </strong>
                  <span className='text-slate-500 text-sm font-medium dark:text-slate-400'>
                    Technical advisor
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='ferrari.jpg' />
                <div className='flex flex-col text-left'>
                  <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                    Debra Houston
                  </strong>
                  <span className='text-slate-500 text-sm font-medium dark:text-slate-400'>
                    Analyst
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='ferrari.jpg' />
                <div className='flex flex-col text-left'>
                  <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                    Jane White
                  </strong>
                  <span className='text-slate-500 text-sm font-medium dark:text-slate-400'>
                    Director, Marketing
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='ferrari.jpg' />
                <div className='flex flex-col text-left'>
                  <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                    Ray Flint
                  </strong>
                  <span className='text-slate-500 text-sm font-medium dark:text-slate-400'>
                    Technical Advisor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='mt-4 mb-'>
        <div class='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
          <div class='relative rounded-xl overflow-auto'>
            <div class='max-w-md mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5'>
              <div class='overflow-x-auto flex'>
                <div class='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div class='flex flex-col items-center justify-center gap-3'>
                    <img
                      class='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong class='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Andrew
                    </strong>
                  </div>
                </div>
                <div class='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div class='flex flex-col items-center justify-center gap-3'>
                    <img
                      class='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong class='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Emily
                    </strong>
                  </div>
                </div>
                <div class='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div class='flex flex-col items-center justify-center gap-3'>
                    <img
                      class='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong class='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Whitney
                    </strong>
                  </div>
                </div>
                <div class='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div class='flex flex-col items-center justify-center gap-3'>
                    <img
                      class='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong class='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      David
                    </strong>
                  </div>
                </div>
                <div class='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div class='flex flex-col items-center justify-center gap-3'>
                    <img
                      class='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong class='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Kristin
                    </strong>
                  </div>
                </div>
                <div class='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div class='flex flex-col items-center justify-center gap-3'>
                    <img class='w-20 h-20 rounded-full' src='ferrari.jpg' />
                    <strong class='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Sarah
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
