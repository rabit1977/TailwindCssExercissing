import React from 'react';
import MainHeader from './MainHeader';
import Main from './Main';
import Sidebar from './Sidebar';

export default function MainPage() {
  return (
    <div className='bg-slate-300 p-2 lg:p-4 grid grid-cols-6 h-screen'>
      {/* Sidebar wrapper */}
      <div className='grid col-span-1 p-2 bg-yellow-400'>
        <Sidebar />
      </div>
      {/* Main and Main Header wrapper */}
      <div className='grid col-span-5 grid-rows-8 p-2 lg:p-4 bg-pink-300'>
        <div className='h-20  bg-indigo-300'>
          <MainHeader />
        </div>
        <div className=''>
          <Main />
        </div>
      </div>
    </div>
  );
}
