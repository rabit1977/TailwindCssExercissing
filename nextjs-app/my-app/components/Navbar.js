import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiMicrophone } from 'react-icons/hi';

export default function Navbar() {
  return (
    <nav className='sticky px-2 py-4 border-b'>
      <div className='top-0 w-full h-16 flex items-center justify-between leading-snug after:h-1 after:opacity-100 after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:left-0 after:z-90 after:content-[""]'>
        {/* left Navbar */}
        <div className='flex items-center min-w-min'>
          <span className='hover:bg-black/10 rounded-full p-2 w-14 lg:w-16 lg:h-16 h-14 flex items-center justify-center cursor-pointer'>
            <GiHamburgerMenu size={40} fill='#555' />
          </span>
          <div className='text-4xl flex text-red-600 font-semibold cursor-pointer'>
            <span>Youtube </span>
            <sup className='text-slate-600 text-xs'>MK</sup>
          </div>
        </div>

        {/* search and center of Navbar */}
        <div className='w-1/2 hidden sm:flex'>
          <div className='flex items-center w-full space-x-1 lg:space-x-4'>
            <div className='flex w-full'>
              <div className='flex items-center border border-slate-400 shadow h-16 rounded-l-full w-full'>
                <input
                  type='text'
                  className='flex w-full min-w-min bg-transparent placeholder:text-xl placeholder:text-slate-500 outline-none px-4 text-slate-700'
                  placeholder='Search'
                />
              </div>
              <button className='flex items-center justify-center flex-none w-20 lg:w-28 h-16 border  border-slate-400 hover:bg-black/10 rounded-r-full border-l-0 bg-slate-50 after:content-["Search"] tooltip'>
                <span className=''>
                  <AiOutlineSearch size={40} color='#333' />
                </span>
              </button>
            </div>
            <div>
              <button className='hover:bg-black/10 rounded-full  flex items-center justify-center p-3'>
                <span className='tooltip after:content-["Search"]'>
                  <HiMicrophone size={30} color='#333' />{' '}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* right Navbar */}
        <div className=''>
          <ul className='flex items-center justify-between  xl:space-x-2'>
            <li className='hover:bg-black/10 rounded-full p-3 w-14 h-14 flex items-center justify-center after:content-["Create"] tooltip cursor-pointer'>
              <AiOutlineVideoCameraAdd size={40} />{' '}
            </li>
            <li className='hover:bg-black/10 rounded-full p-3 w-14 h-14 flex items-center justify-center after:content-["Notifications"] tooltip cursor-pointer'>
              <div className='relative'>
                <span className='absolute  bg-red-500 text-xs w-auto h-6 -top-3 -right-2 p-1 rounded-full text-white ring ring-white'>
                  9+
                </span>
                <IoIosNotificationsOutline size={40} />{' '}
              </div>
            </li>
            <img
              src='hedyLammarr.jpg'
              alt=''
              className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ring-2 ring-offset-1 ring-slate-400'
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
