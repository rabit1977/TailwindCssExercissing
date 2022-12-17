import React from 'react';

export default function Main() {
  return (
    <div className='bg-white h-72 rounded-lg shadow-sm col-span-5 max-w-lg m-auto my-4 sm:col-span-3 p-1'>
      <div
        title='div-top'
        className='flex gap-2 w-full justify-around font-semibold text-slate-600'
      >
        <div className='flex gap-2 p-4  text-sm text-blue-700'>
          <div>+</div>
          <div>Stories</div>
        </div>
        <div className='flex gap-2 p-4 font-semibold text-slate-600 text-sm'>
          <div>+</div>
          <div>Stories</div>
        </div>
        <div className='flex gap-2 p-4 font-semibold text-slate-600 text-sm'>
          <div>+</div>
          <div>Stories</div>
        </div>
      </div>
      <div className='flex items-center justify-between gap-1'>
        <div className='relative h-full'>
          <img
            className='h-full w-full flex absolute object-cover '
            src='public/adidas shoes.webp'
            alt=''
          />
          <p className='absolute'>content</p>
        </div>
        <div>
          <img src='public/adidas shoes.webp' alt='' />
          <p>content</p>
        </div>
        <div>
          <img src='public/adidas shoes.webp' alt='' />
          <p>content</p>
        </div>
        <div>
          <img src='public/adidas shoes.webp' alt='' />
          <p>content</p>
        </div>
      </div>
    </div>
  );
}
