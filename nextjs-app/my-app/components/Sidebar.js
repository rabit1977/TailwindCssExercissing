import Link from 'next/link';
import React from 'react';
import { AiFillHome, AiOutlineVideoCamera } from 'react-icons/ai';
import {
  MdHistory,
  MdOutlineLocalMovies,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineVideoSettings,
  MdOutlineWatchLater,
} from 'react-icons/md';

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
            <li className='flex mt-4 flex-col items-center xl:flex-row xl:space-x-2 space-y-1  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
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
                <MdOutlineVideoSettings size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Movies
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineLocalMovies size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Your Movies
              </Link>
            </li>

            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineWatchLater size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Watch Later
              </Link>
            </li>
            <li className='mb-4 flex flex-col items-center xl:flex-row xl:space-x-2 space-y-1  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <button className='flex justify-center items-end active:bg-slate-100 xl:flex-row xl:space-x-2 space-y-1'>
                <AiFillHome size={30} fill='#222' />
                <Link
                  href='/'
                  className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
                >
                  Show More
                </Link>
              </button>
            </li>
          </ul>
          <ul className=''>
            <h1 className='text-xl mt-5 tracking-wide font-semibold'>
              Subscriptions
            </h1>
            <li className='flex mt-4 flex-col items-center xl:flex-row xl:space-x-2 space-y-1  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
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
                <MdOutlineVideoSettings size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Movies
              </Link>
            </li>
            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineLocalMovies size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Your Movies
              </Link>
            </li>

            <li className='flex flex-col items-center xl:flex-row xl:space-x-2 space-y-2  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <span className='flex justify-center active:bg-slate-100'>
                <MdOutlineWatchLater size={30} fill='#222' />
              </span>
              <Link
                href='/'
                className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
              >
                Watch Later
              </Link>
            </li>
            <li className='mb-4 flex flex-col items-center xl:flex-row xl:space-x-2 space-y-1  xl:justify-start hover:bg-slate-100 py-1 px-2 rounded-lg'>
              <button className='flex justify-center items-end active:bg-slate-100 xl:flex-row xl:space-x-2 space-y-1'>
                <AiFillHome size={30} fill='#222' />
                <Link
                  href='/'
                  className='flex justify-center text-medium lg:text-lg text-slate-800 font-medium'
                >
                  Show More
                </Link>
              </button>
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
