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
      <div className='mt-4 mb-'>
        <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
          <div className='relative rounded-xl overflow-auto'>
            <div className='max-w-md mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5'>
              <div className='overflow-x-auto flex'>
                <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong className='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Andrew
                    </strong>
                  </div>
                </div>
                <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong className='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Emily
                    </strong>
                  </div>
                </div>
                <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong className='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Whitney
                    </strong>
                  </div>
                </div>
                <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong className='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      David
                    </strong>
                  </div>
                </div>
                <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <img
                      className='w-20 h-20 rounded-full'
                      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80'
                    />
                    <strong className='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Kristin
                    </strong>
                  </div>
                </div>
                <div className='flex-none py-6 px-3 first:pl-6 last:pr-6'>
                  <div className='flex flex-col items-center justify-center gap-3'>
                    <img className='w-20 h-20 rounded-full' src='ferrari.jpg' />
                    <strong className='text-slate-900 text-xs font-medium dark:text-slate-200'>
                      Sarah
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 mb-8'>
        <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
          <div className='relative rounded-xl overflow-auto'>
            <div className='m-4 bg-white dark:bg-slate-800 shadow-xl overflow-hidden'>
              <div className='overflow-scroll grid grid-cols-[70px,repeat(7,100px)] grid-rows-[auto,repeat(16,50px)] max-h-[350px]'>
                <div className='row-start-[1] col-start-[1] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2'></div>
                <div className='row-start-[1] col-start-[2] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Sun
                </div>
                <div className='row-start-[1] col-start-[3] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Mon
                </div>
                <div className='row-start-[1] col-start-[4] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Tue
                </div>
                <div className='row-start-[1] col-start-[5] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Wed
                </div>
                <div className='row-start-[1] col-start-[6] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Thu
                </div>
                <div className='row-start-[1] col-start-[7] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Fri
                </div>
                <div className='row-start-[1] col-start-[8] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2 text-center'>
                  Sat
                </div>
                <div className='row-start-[2] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  5 AM
                </div>
                <div className='row-start-[2] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[2] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[2] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[2] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[2] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[2] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[2] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[3] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  6 AM
                </div>
                <div className='row-start-[3] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[3] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[3] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[3] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[3] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[3] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[3] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[4] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  7 AM
                </div>
                <div className='row-start-[4] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[4] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[4] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[4] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[4] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[4] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[4] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[5] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  8 AM
                </div>
                <div className='row-start-[5] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[5] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[5] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[5] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[5] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[5] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[5] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[6] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  9 AM
                </div>
                <div className='row-start-[6] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[6] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[6] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[6] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[6] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[6] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[6] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[7] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  10 AM
                </div>
                <div className='row-start-[7] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[7] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[7] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[7] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[7] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[7] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[7] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[8] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  11 AM
                </div>
                <div className='row-start-[8] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[8] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[8] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[8] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[8] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[8] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[8] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[9] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  12 PM
                </div>
                <div className='row-start-[9] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[9] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[9] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[9] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[9] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[9] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[9] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[10] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  1 PM
                </div>
                <div className='row-start-[10] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[10] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[10] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[10] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[10] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[10] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[10] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[11] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  2 PM
                </div>
                <div className='row-start-[11] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[11] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[11] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[11] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[11] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[11] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[11] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[12] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  3 PM
                </div>
                <div className='row-start-[12] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[12] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[12] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[12] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[12] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[12] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[12] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[13] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  4 PM
                </div>
                <div className='row-start-[13] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[13] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[13] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[13] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[13] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[13] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[13] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[14] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  5 PM
                </div>
                <div className='row-start-[14] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[14] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[14] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[14] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[14] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[14] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[14] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[15] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  6 PM
                </div>
                <div className='row-start-[15] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[15] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[15] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[15] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[15] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[15] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[15] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[16] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  7 PM
                </div>
                <div className='row-start-[16] col-start-[2] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[16] col-start-[3] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[16] col-start-[4] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[16] col-start-[5] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[16] col-start-[6] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[16] col-start-[7] border-slate-100 dark:border-slate-200/5 border-b border-r'></div>
                <div className='row-start-[16] col-start-[8] border-slate-100 dark:border-slate-200/5 border-b'></div>
                <div className='row-start-[17] col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs p-1.5 text-right text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium'>
                  8 PM
                </div>
                <div className='row-start-[17] col-start-[2] border-slate-100 dark:border-slate-200/5 border-r'></div>
                <div className='row-start-[17] col-start-[3] border-slate-100 dark:border-slate-200/5 border-r'></div>
                <div className='row-start-[17] col-start-[4] border-slate-100 dark:border-slate-200/5 border-r'></div>
                <div className='row-start-[17] col-start-[5] border-slate-100 dark:border-slate-200/5 border-r'></div>
                <div className='row-start-[17] col-start-[6] border-slate-100 dark:border-slate-200/5 border-r'></div>
                <div className='row-start-[17] col-start-[7] border-slate-100 dark:border-slate-200/5 border-r'></div>
                <div className='row-start-[17] col-start-[8]'></div>
                <div className='row-start-[2] col-start-3 row-span-4 bg-blue-400/20 dark:bg-sky-600/50 border border-blue-700/10 dark:border-sky-500 rounded-lg m-1 p-1 flex flex-col'>
                  <span className='text-xs text-blue-600 dark:text-sky-100'>
                    5 AM
                  </span>
                  <span className='text-xs font-medium text-blue-600 dark:text-sky-100'>
                    Flight to vancouver
                  </span>
                  <span className='text-xs text-blue-600 dark:text-sky-100'>
                    Toronto YYZ
                  </span>
                </div>
                <div className='row-start-[3] col-start-[4] row-span-4 bg-purple-400/20 dark:bg-fuchsia-600/50 border border-purple-700/10 dark:border-fuchsia-500 rounded-lg m-1 p-1 flex flex-col'>
                  <span className='text-xs text-purple-600 dark:text-fuchsia-100'>
                    6 AM
                  </span>
                  <span className='text-xs font-medium text-purple-600 dark:text-fuchsia-100'>
                    Breakfast
                  </span>
                  <span className='text-xs text-purple-600 dark:text-fuchsia-100'>
                    Mel's Diner
                  </span>
                </div>
                <div className='row-start-[14] col-start-[7] row-span-3 bg-pink-400/20 dark:bg-indigo-600/50 border border-pink-700/10 dark:border-indigo-500 rounded-lg m-1 p-1 flex flex-col'>
                  <span className='text-xs text-pink-600 dark:text-indigo-100'>
                    5 PM
                  </span>
                  <span className='text-xs font-medium text-pink-600 dark:text-indigo-100'>
                    🎉 Party party 🎉
                  </span>
                  <span className='text-xs text-pink-600 dark:text-indigo-100'>
                    We like to party!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5'></div>
        </div>
      </div>
    </>
  );
}

export default App;
