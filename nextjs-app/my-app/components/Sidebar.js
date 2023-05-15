import Link from 'next/link';
import React from 'react';
import { AiFillHome, AiOutlineVideoCamera } from 'react-icons/ai';
import { MdHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';


export default function Sidebar() {
  return (
    /* Sidebar wrapper */
    <div>
      {/* Sidebar container */}
      <div className=''>
        {/* Sidebar home wrapper */}
        <div className='divide-y divide-slate-400'>
          <ul className='mb-4'>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 xl:space-y-1 space-y-1  xl:justify-start bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiFillHome size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Home
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiOutlineVideoCamera size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Shorts
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineSubscriptions size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Subscriptions
              </Link>
            </li>
          </ul>
          <ul className=''>
            <li className='flex mt-8 flex-col items-center xl:flex-row xl:space-x-2 space-y-1  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineVideoLibrary size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Library
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdHistory size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                History
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineSubscriptions size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Subscriptions
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiOutlineVideoCamera size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Shorts
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineSubscriptions size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Subscriptions
              </Link>
            </li>
          </ul>
          <ul className='last:mb-3 space-y-2'>
            <li className='mt-8 flex flex-col items-center xl:flex-row xl:space-x-2 space-y-1  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiFillHome size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Home
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <AiOutlineVideoCamera size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Shorts
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineSubscriptions size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Subscriptions
              </Link>
            </li>
          </ul>
        </div>
        {/* Sidebar ibrary wrapper */}
        <div></div>
        {/* Sidebar Subscriptions */}
      </div>
    </div>
  );
}
