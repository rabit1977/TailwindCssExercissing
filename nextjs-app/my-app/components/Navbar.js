import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiMicrophone } from 'react-icons/hi';

export default function Navbar() {
  return (
    <nav className='sticky p-3 border-b'>
      <div className='top-0 w-full h-14 p-0 md:p-4 flex items-center justify-between leading-snug after:h-1 after:opacity-100 after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:left-0 after:z-90 after:content-[""]'>
        {/* left Navbar */}
        <div className='flex items-center min-w-min'>
          <span className='hover:bg-black/10 rounded-full p-2 w-14 h-14 flex items-center justify-center'>
            <GiHamburgerMenu size={30} fill='#555' />
          </span>
          <div className='text-3xl flex text-red-600 font-semibold'>
            <span>Youtube </span>
            <sup className='text-slate-600 text-xs'>MK</sup>
          </div>
        </div>

        {/* search and center of Navbar */}
        <div className='w-1/2 hidden sm:flex mx-2'>
          <div className=' items-center flex w-full space-x-2 lg:space-x-4'>
            <div className='flex w-full'>
              <div className='flex items-center border border-slate-800 h-12 rounded-l-full w-full'>
                <input
                  type='text'
                  className='flex w-full min-w-min bg-transparent placeholder:text-lg placeholder:text-slate-600 outline-none px-4 text-slate-700'
                  placeholder='Search'
                />
              </div>
              <button className='flex items-center justify-center flex-none w-12 lg:w-20 h-12 border  border-slate-800 hover:bg-black/10 rounded-r-full border-l-0 bg-slate-50 after:content-["Search"] tooltip'>
                <span className=''>
                  <AiOutlineSearch size={30} />
                </span>
              </button>
            </div>
            <button classname='hover:bg-black/10 rounded-full p-3 w-14 h-14 flex items-center justify-center '>
              <span className='tooltip after:content-["Search"]'>
                <HiMicrophone size={30} />{' '}
              </span>
            </button>
          </div>
        </div>

        {/* right Navbar */}
        <div className=''>
          <ul className='flex items-center justify-between  xl:space-x-2'>
            <li className='hover:bg-black/10 rounded-full p-3 w-14 h-14 flex items-center justify-center after:content-["Create"] tooltip'>
              <AiOutlineVideoCameraAdd size={30} />{' '}
            </li>
            <li className='hover:bg-black/10 rounded-full p-3 w-14 h-14 flex items-center justify-center after:content-["Notifications"] tooltip'>
              <div className='relative '>
                <span className='absolute  bg-red-500 text-xs w-auto h-6 -top-3 -right-2 p-1 rounded-full text-white ring ring-white'>
                  9+
                </span>
                <IoIosNotificationsOutline size={30} />{' '}
              </div>
            </li>
            <img
              src='hedyLammarr.jpg'
              alt=''
              className='w-16 h-16 rounded-full p-3 flex items-center justify-center'
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
