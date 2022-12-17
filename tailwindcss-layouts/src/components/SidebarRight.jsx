import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups, MdOndemandVideo, MdRecentActors } from 'react-icons/md';

export default function SidebarRight() {
  return (
    <div className='hidden sm:block sm:col-span-1 col-span-2 m-auto -mt-2 py-4'>
      <ul>
        <li className='flex items-center  font-semibold text-sm text-slate-700 md:gap-4 gap-2 mb-1 hover:bg-[#E4E6E9] p-2'>
          <CgProfile size='1.4rem' color='#4969af' />
          <a href='#'>Andi Ebibi</a>
        </li>
        <li className='flex items-center  font-semibold text-sm text-slate-700 md:gap-4 gap-2 mb-1 hover:bg-[#E4E6E9] p-2'>
          <FaUserFriends size='1.4rem' color='#4969af' />
          <a href='#'>Friends</a>
        </li>
        <li className='flex items-center  font-semibold text-sm text-slate-700 md:gap-4 gap-2 mb-1 hover:bg-[#E4E6E9] p-2'>
          <MdRecentActors size='1.4rem' color='#4969af' />
          <a href='#'>Most Recent</a>
        </li>
        <li className='flex items-center  font-semibold text-sm text-slate-700 md:gap-4 gap-2 mb-1 hover:bg-[#E4E6E9] p-2'>
          <MdGroups size='1.4rem' color='#4969af' />
          <a href='#'>Groups</a>
        </li>
        <li className='flex items-center  font-semibold text-sm text-slate-700 md:gap-4 gap-2 mb-1 hover:bg-[#E4E6E9] p-2'>
          <MdOndemandVideo size='1.4rem' color='#4969af' />
          <a href='#'>Watch</a>
        </li>
        <li className='flex items-center  font-semibold text-sm text-slate-700 md:gap-4 gap-2 mb-1 hover:bg-[#E4E6E9] p-2'>
          <BsStopwatch size='1.4rem' color='#4267b2' />
          <a href='#'>Memories</a>
        </li>
      </ul>
      <div className='flex gap-1 p-2 font-semibold text-slate-700 text-sm items-center '>
        <div className='bg-[#e4md:e6e9] gap-2 text-lg rounded-full w-8 h-8 grid place-content-center'>
          +
        </div>
        <div>See more</div>
      </div>
      <div className='border-b border-slate-400'></div>
    </div>
  );
}
