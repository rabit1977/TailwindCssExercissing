import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Checkbox } from './Checkbox';
import Button from './Button';
import { LargeButtons } from './LargeButtons';
import { LoadingButton } from './LoadingButton';

function App() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className=''>
        <div className='columns-3 space-y-4 shadow-xl rounded-xl overflow-hidden my-4 border'>
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
        <div className='max-w-xs  m-auto shadow-lg border-4 ring-1 ring-black/20 ring-inset border-black/10 rounded-lg text-sm  bg-slate-50 border-b-2 text-slate-800 px-4 py-2'>
          <div className=' w-full text-left flex items-center justify-start gap-4'>
            <img
              src='ferrari.jpg'
              alt=''
              className='w-16 h-16 rounded-full border-4 border-black/20'
            />
            <div className='flex flex-col text-left'>
              <strong>Andi Ebibi</strong>
              <span className=''>Technical advisor</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-rose-100 border-4 border-rose-400/60 ring-1 ring-black/40 p-4 my-4 border-b-2 shadow-md '>
        <span className='grid justify-items-center grid-cols-3 gap-4'>
          <span className='p-2 text-white text-sm font-semibold bg-rose-500 ring-2 ring-rose-400/80 border-4  rounded-full w-12 h-12'>
            1
          </span>
          <span className='p-2 text-white text-sm font-semibold bg-rose-500 ring-2 ring-rose-400/80 border-4  rounded-full w-12 h-12'>
            2
          </span>
          <span className='p-2 text-white text-sm font-semibold bg-rose-500 ring-2 ring-rose-400/80 border-4  rounded-full w-12 h-12'>
            3
          </span>
          <span className='p-2 text-white text-sm font-semibold bg-rose-500 ring-2 ring-rose-400/80 border-4  rounded-full w-12 h-12'>
            4
          </span>
          <span className='p-2 text-white text-sm font-semibold bg-rose-500 ring-2 ring-rose-400/80 border-4  rounded-full w-12 h-12'>
            5
          </span>
          <span className='p-2 text-white text-sm font-semibold bg-rose-500 ring-2 ring-rose-400/80 border-4  rounded-full w-12 h-12'>
            6
          </span>
        </span>
      </div>
      <div>
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
                <div className='row-start-[1] col-start-[1] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-00 dark:text-slate-200 border-b text-sm font-medium py-2'></div>
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
      <div className='bg-red-500 w-full p-4'>
        <div className='bg-white p-4 font-semibold m-2'>
          <p className='text-blue-500 p-2 text-lg'>
            I love coding<span className='bg-indigo-500 p-2'>True</span>
            <em className='text-white bg-red-400 p-2'>better coding</em>
          </p>
        </div>
        <div className='bg-white p-4 font-semibold m-2'>
          <p className='text-blue-500 p-2 text-lg'>
            I love coding<span className='bg-indigo-500 p-2'>True</span>
            <em className='text-white bg-red-400 p-2'>better coding</em>
          </p>
        </div>
        <div className='bg-white p-4 font-semibold m-2'>
          <p className='text-blue-500 p-2 text-lg'>
            I love coding<span className='bg-indigo-500 p-2'>True</span>
            <em className='text-white bg-red-400 p-2'>better coding</em>
          </p>
        </div>
        <div className='bg-white p-4 font-semibold m-2'>
          <p className='text-blue-500 p-2 text-lg'>
            I love coding<span className='bg-indigo-500 p-2'>True</span>
            <em className='text-white bg-red-400 p-2'>better coding</em>
          </p>
        </div>
      </div>
      <div className='relative bg-red-100 mt-2 rounded-xl overflow-auto p-8'>
        <div className='relative text-sm font-medium leading-6'>
          <div className='bg-purple-400/20 border border-purple-700/10 rounded-lg p-4 dark:bg-sky-900/70 dark:border-0'>
            <div className='static bg-purple-400/20 border border-purple-700/10 p-4 h-32 dark:bg-sky-400/20 dark:border-0'>
              <p className='text-purple-700 dark:text-sky-200'>Static parent</p>
              <div className='absolute bottom-0 left-0 bg-purple-500 shadow-lg rounded-lg p-4 text-white dark:bg-sky-500'>
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative rounded-xl bg-slate-100 mt-4 overflow-auto p-8'>
        <div className='relative text-sm font-medium leading-6'>
          <div className='bg-sky-400/20 border border-sky-700/10 rounded-lg p-4 dark:bg-blue-900/70 dark:border-0'>
            <div className='relative bg-sky-400/20 border border-sky-700/10 p-4 h-32 dark:bg-blue-400/20 dark:border-0'>
              <p className='text-sky-700 dark:text-white'>Relative parent</p>
              <div className='absolute bottom-0 left-0 bg-sky-500 shadow-lg rounded-lg p-4 text-white dark:bg-blue-500'>
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative text-sm font-medium leading-6'>
        <div className='relative bg-indigo-400/20 border border-indigo-700/10 rounded-lg p-4 dark:bg-indigo-900/80 dark:border-0'>
          <p className='text-indigo-700 -mt-2 mb-2 dark:text-indigo-200'>
            Relative parent
          </p>
          <div className='static bg-indigo-400/20 border border-indigo-700/10 p-4 h-32 flex flex-col justify-between dark:border-0'>
            <p className='text-indigo-700 dark:text-indigo-200'>
              Static parent
            </p>
            <div className='flex gap-4'>
              <div className=' bottom-0 left-0 bg-indigo-500 shadow-lg rounded-lg p-4 text-white'>
                <p>Static child</p>
              </div>
              <div className='bg-indigo-100 shadow-lg rounded-lg p-4 text-indigo-600'>
                <p>Static sibling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative text-sm font-medium leading-6 mt-4'>
        <div className='relative bg-indigo-400/20 border border-indigo-700/10 rounded-lg p-4 dark:bg-indigo-900/80 dark:border-0'>
          <p className='text-indigo-700 -mt-2 mb-2 dark:text-indigo-200'>
            Relative parent
          </p>
          <div className='static bg-indigo-400/20 border border-indigo-700/10 p-4 h-32 flex flex-col justify-between dark:border-0'>
            <p className='text-indigo-700 dark:text-indigo-200'>
              Static parent
            </p>
            <div className='flex gap-4'>
              <div className='absolute top-0 right-0 bg-indigo-500 shadow-lg rounded-lg p-4 text-white'>
                <p>Absolute child</p>
              </div>
              <div className='bg-indigo-100 shadow-lg rounded-lg p-4 text-indigo-600'>
                <p>Static sibling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative rounded-xl overflow-auto'>
        <div className='px-3 mt-4 bg-slate-200 p-4 rounded-xl'>
          <div className='relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-hidden ring-1 ring-slate-900/5'>
            <div className='absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10'>
              Contacts
            </div>
            <div className='overflow-auto flex flex-col divide-y h-80 dark:divide-slate-200/5'>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='hedyLammarr.jpg' />
                <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                  Andrew Alfred
                </strong>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='hedyLammarr.jpg' />
                <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                  Debra Houston
                </strong>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='hedyLammarr.jpg' />
                <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                  Jane White
                </strong>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='hedyLammarr.jpg' />
                <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                  Ray Flint
                </strong>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='hedyLammarr.jpg' />
                <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                  Mindy Albrect
                </strong>
              </div>
              <div className='flex items-center gap-4 p-4'>
                <img className='w-12 h-12 rounded-full' src='hedyLammarr.jpg' />
                <strong className='text-slate-900 text-sm font-medium dark:text-slate-200'>
                  David Arnold
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 mt-4'>
        <div className='relative rounded-xl overflow-auto p-8'>
          <div className='grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-white text-sm font-bold leading-6'>
            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 w-14 h-14 absolute -left-4 -top-4 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  01
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 absolute inset-x-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  02
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 w-14 h-14 absolute right-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  03
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 w-14 absolute inset-y-0 left-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  04
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 absolute inset-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  05
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 w-14 absolute inset-y-0 right-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  06
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 w-14 h-14 absolute left-0 bottom-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  07
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 absolute inset-x-0 bottom-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  08
                </div>
              </div>
            </div>

            <div className='w-32 h-32 bg-purple-200'>
              <div className='relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple'>
                <div className='p-4 w-14 h-14 absolute right-0 bottom-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg'>
                  09
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5'></div>
      </div>
      <div class='relative rounded-xl overflow-auto'>
        <div class='py-8'>
          <div class='mb-3 pl-4 text-sm font-medium text-slate-500 dark:text-slate-400'>
            Showing all rows
          </div>
          <table class='border-collapse w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm'>
            <thead class='bg-slate-50 dark:bg-slate-700'>
              <tr>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left'>
                  Invoice #
                </th>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left'>
                  Client
                </th>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-right'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #100
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  Pendant Publishing
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $2,000.00
                </td>
              </tr>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #101
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  Kruger Industrial Smoothing
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $545.00
                </td>
              </tr>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #102
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  J. Peterman
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $10,000.25
                </td>
              </tr>
            </tbody>
          </table>
          <div class='mt-10 mb-3 pl-4 text-sm font-medium text-slate-500 dark:text-slate-400'>
            Hiding a row using{' '}
            <code class='text-xs text-slate-700 dark:text-slate-300'>
              `collapse`
            </code>
          </div>
          <table class='border-collapse w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm'>
            <thead class='bg-slate-50 dark:bg-slate-700'>
              <tr>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left'>
                  Invoice #
                </th>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left'>
                  Client
                </th>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-right'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #100
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  Pendant Publishing
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $2,000.00
                </td>
              </tr>
              <tr class='collapse'>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #101
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  Kruger Industrial Smoothing
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $545.00
                </td>
              </tr>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #102
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  J. Peterman
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $10,000.25
                </td>
              </tr>
            </tbody>
          </table>
          <div class='mt-10 mb-3 pl-4 text-sm font-medium text-slate-500 dark:text-slate-400'>
            Hiding a row using{' '}
            <code class='text-xs text-slate-700 dark:text-slate-300'>
              `hidden`
            </code>
          </div>
          <table class='border-collapse w-full border-y border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm'>
            <thead class='bg-slate-50 dark:bg-slate-700'>
              <tr>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left'>
                  Invoice #
                </th>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-left'>
                  Client
                </th>
                <th class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-600 font-semibold px-4 py-3 text-slate-900 dark:text-slate-200 text-right'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #100
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  Pendant Publishing
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $2,000.00
                </td>
              </tr>
              <tr class='hidden'>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #101
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  Kruger Industrial Smoothing
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $545.00
                </td>
              </tr>
              <tr>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  #102
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400'>
                  J. Peterman
                </td>
                <td class='border first:border-l-0 last:border-r-0 border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-500 dark:text-slate-400 text-right tabular-nums'>
                  $10,000.25
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class='not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25'>
        <div class='relative rounded-xl overflow-auto p-8'>
          <div class='flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6'>
            <div class='w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40 dark:ring-slate-900'>
              05
            </div>
            <div class='w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-30 dark:ring-slate-900'>
              04
            </div>
            <div class='w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20 dark:ring-slate-900'>
              03
            </div>
            <div class='w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10 dark:ring-slate-900'>
              02
            </div>
            <div class='w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0 dark:ring-slate-900'>
              01
            </div>
          </div>
        </div>
        <div class='absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5'></div>
      </div>
      {/* responsive design */}
      <main class='py-6 px-4 sm:p-6 md:py-10 md:px-8 border mt-6 shadow-sm '>
        <div class='max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
          <div class='relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
            <h1 class='mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white'>
              Beach House in Collingwood
            </h1>
            <p class='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>
              Entire house
            </p>
          </div>
          <div class='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
            <img
              src='/ferrari.jpg'
              alt=''
              class='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full'
              loading='lazy'
            />
            <img
              src='/ferrari.jpg'
              alt=''
              class='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32'
              loading='lazy'
            />
            <img
              src='/ferrari.jpg'
              alt=''
              class='hidden w-full h-52 object-cover rounded-lg md:col-span-1 md:block lg:row-start-2 lg:col-span-2 lg:h-32'
              loading='lazy'
            />
          </div>
          <dl class='mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2'>
            <dt class='sr-only'>Reviews</dt>
            <dd class='text-indigo-600 flex items-center dark:text-indigo-400'>
              <svg
                width='24'
                height='24'
                fill='none'
                aria-hidden='true'
                class='mr-1 stroke-current dark:stroke-indigo-500'
              >
                <path
                  d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              <span>
                4.89 <span class='text-slate-400 font-normal'>(128)</span>
              </span>
            </dd>
            <dt class='sr-only'>Location</dt>
            <dd class='flex items-center'>
              <svg
                width='2'
                height='2'
                aria-hidden='true'
                fill='currentColor'
                class='mx-3 text-slate-300'
              >
                <circle cx='1' cy='1' r='1' />
              </svg>
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='mr-1 text-slate-400 dark:text-slate-500'
                aria-hidden='true'
              >
                <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
                <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
              </svg>
              Collingwood, Ontario
            </dd>
          </dl>
          <div class='mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
            <button
              type='button'
              class='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'
            >
              Check availability
            </button>
          </div>
          <p class='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400'>
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cosy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood littered with
            cafes, pubs, restaurants and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthur's Seat.
          </p>
        </div>
      </main>
      {/* hover and focus state */}
      <section className='border shadow-sm mt-6 p-4'>
        <header class='bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6'>
          <div class='flex items-center justify-between'>
            <h2 class='font-semibold text-slate-900'>Projects</h2>
            <a
              href='/new'
              class='hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm'
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                class='mr-2'
                aria-hidden='true'
              >
                <path d='M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z' />
              </svg>
              New
            </a>
          </div>
          <form class='group relative'>
            <svg
              width='20'
              height='20'
              fill='currentColor'
              class='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              />
            </svg>
            <input
              class='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm'
              type='text'
              aria-label='Filter projects'
              placeholder='Filter projects...'
            />
          </form>
        </header>
        <ul class='bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6'>
          <li className='hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm '>
            <a href='#' class=''>
              <dl class='grid sm:block text-left  lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
                <div className=''>
                  <dt class='sr-only'>Title</dt>
                  <dd class='group-hover:text-white font-semibold text-slate-900'>
                    project.title
                  </dd>
                </div>
                <div>
                  <dt class='sr-only'>Category</dt>
                  <dd class='group-hover:text-blue-200'>project.category</dd>
                </div>
                <div class='col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4'>
                  <dt class='sr-only'>Users</dt>
                  <dd
                    x-for='user in project.users'
                    class='flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5'
                  >
                    <img
                      src='ferrari.jpg'
                      alt='user.name'
                      class='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white'
                      loading='lazy'
                    />
                  </dd>
                </div>
              </dl>
            </a>
          </li>
          <li className='hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm '>
            <a href='#' class=''>
              <dl class='grid sm:block text-left  lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
                <div className=''>
                  <dt class='sr-only'>Title</dt>
                  <dd class='group-hover:text-white font-semibold text-slate-900'>
                    project.title
                  </dd>
                </div>
                <div>
                  <dt class='sr-only'>Category</dt>
                  <dd class='group-hover:text-blue-200'>project.category</dd>
                </div>
                <div class='col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4'>
                  <dt class='sr-only'>Users</dt>
                  <dd
                    x-for='user in project.users'
                    class='flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5'
                  >
                    <img
                      src='ferrari.jpg'
                      alt='user.name'
                      class='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white'
                      loading='lazy'
                    />
                  </dd>
                </div>
              </dl>
            </a>
          </li>{' '}
          <li className='hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm '>
            <a href='#' class=''>
              <dl class='grid sm:block text-left  lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
                <div className=''>
                  <dt class='sr-only'>Title</dt>
                  <dd class='group-hover:text-white font-semibold text-slate-900'>
                    project.title
                  </dd>
                </div>
                <div>
                  <dt class='sr-only'>Category</dt>
                  <dd class='group-hover:text-blue-200'>project.category</dd>
                </div>
                <div class='col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4'>
                  <dt class='sr-only'>Users</dt>
                  <dd
                    x-for='user in project.users'
                    class='flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5'
                  >
                    <img
                      src='ferrari.jpg'
                      alt='user.name'
                      class='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white'
                      loading='lazy'
                    />
                  </dd>
                </div>
              </dl>
            </a>
          </li>
          <li class='flex'>
            <a
              href='/new'
              class='hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3'
            >
              <svg
                class='group-hover:text-blue-500 mb-1 text-slate-400'
                width='20'
                height='20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z' />
              </svg>
              New project
            </a>
          </li>
        </ul>
      </section>
      {/* CSS Grids filters */}
      <div class='grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 border p-6 mt-4 shadow-md'>
        <div class='blur'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div class='col-start-3 sepia'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div class='saturate-200'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div class='grayscale'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div class='row-start-1 col-start-2 col-span-2 invert'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
      </div>
      {/* CSS grid transforms */}
      <div className='border m-6 shadow-sm p-4'>
        <div class='grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 '>
          <div class='transform scale-110 -rotate-6'>
            <img src='/ferrari.jpg' alt='' loading='lazy' />
          </div>
          <div class='col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15'>
            <img src='/ferrari.jpg' alt='' loading='lazy' />
          </div>
          <div class='transform scale-150 translate-y-11'>
            <img src='/ferrari.jpg' alt='' loading='lazy' />
          </div>
          <div class='transform translate-y-24'>
            <img src='/ferrari.jpg' alt='' loading='lazy' />
          </div>
          <div class='row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4'>
            <img src='/ferrari.jpg' alt='' loading='lazy' />
          </div>
        </div>
      </div>
      {/* CSS grid */}
      <div class='grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 border m-6 p-4 shadow-sm'>
        <div>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div class='col-start-3'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
        <div class='row-start-1 col-start-2 col-span-2'>
          <img src='/ferrari.jpg' alt='' loading='lazy' />
        </div>
      </div>
      <Checkbox />
      <Button />
      <LargeButtons />
      <LoadingButton />
    </>
  );
}

export default App;
