import Link from 'next/link';
import React from 'react';
import { AiFillHome, AiOutlineVideoCamera } from 'react-icons/ai';
import { MdOutlineSubscriptions } from 'react-icons/md';

export default function Sidebar() {
  return (
    /* Sidebar wrapper */
    <div>
      {/* Sidebar container */}
      <div className='divide-y-2'>
        {/* Sidebar home wrapper */}
        <div className=''>
          <ul className='last:mb-4 space-y-2'>
            <li className='flex flex-col xl:flex-row xl:space-x-2 space-y-2  xl:justify-start bg-slate-100 py-3 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiFillHome size={40} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-2xl text-slate-800 font-medium'
              >
                Home
              </Link>
            </li>
            <li className='flex flex-col xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-3 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiOutlineVideoCamera size={40} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-2xl text-slate-800 font-medium'
              >
                Shorts
              </Link>
            </li>
            <li className='flex flex-col xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-3 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineSubscriptions size={40} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-2xl text-slate-800 font-medium'
              >
                Subscriptions
              </Link>
            </li>
            {/* <li className='flex items-end  space-x-2 justify-center xl:justify-start hover:bg-slate-100 py-3 px-2  rounded-lg'>
              <span className=' active:bg-slate-100'>
                <AiOutlineVideoCamera size={40} fill='#222' />
              </span>
              <Link
                href='/'
                className='hidden xl:flex text-medium lg:text-2xl text-slate-800 font-medium'
              >
                Shorts
              </Link>
            </li>
            <li className='flex items-end  space-x-2 justify-center xl:justify-start hover:bg-slate-100 py-3 px-2  rounded-lg'>
              <span className=' active:bg-slate-100'>
                <MdOutlineSubscriptions size={40} fill='#222' />
              </span>
              <Link
                href='/'
                className='hidden xl:flex text-medium lg:text-2xl text-slate-800 font-medium'
              >
                Subscriptions
              </Link>
            </li> */}
          </ul>
        </div>
        {/* Sidebar ibrary wrapper */}
        <div></div>
        {/* Sidebar Subscriptions */}
      </div>
    </div>
  );
}
