import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';
import { MdGroups, MdOndemandVideo, MdRecentActors } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';



export default function Sidebar() {
  return (
    <div className="hover:border-r-8 border-[#7B7B7B]/60 h-screen -mt-2 py-4">
      <ul>
      <li className='flex items-center font-semibold text-sm text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-2'>
          <CgProfile size='1.4rem' color='#4969af' />
          <a href='#'>Andi Ebibi</a>
        </li>
        <li className='flex items-center font-semibold text-sm text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-2'>
          <FaUserFriends size='1.4rem' color='#4969af' />
          <a href='#'>Friends</a>
        </li>
        <li className='flex items-center font-semibold text-sm text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-2'>
          <MdRecentActors size='1.4rem' color='#4969af' />
          <a href='#'>Most Recent</a>
        </li>
        <li className='flex items-center font-semibold text-sm text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-2'>
          <MdGroups size='1.4rem' color='#4969af' />
          <a href='#'>Groups</a>
        </li>
        <li className='flex items-center font-semibold text-sm text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-2'>
          <MdOndemandVideo size='1.4rem' color='#4969af' />
          <a href='#'>Watch</a>
        </li>
        <li className='flex items-center font-semibold text-sm text-slate-700 gap-4 mb-1 hover:bg-[#E4E6E9] p-2'>
          <BsStopwatch size='1.4rem' color='#4267b2' />
          <a href='#'>Memories</a>
        </li>
      </ul>
    </div>
  );
}
