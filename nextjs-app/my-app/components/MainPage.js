import React from 'react';
import MainHeader from './MainHeader';
import Main from './Main';
import Sidebar from './Sidebar';

export default function MainPage() {
  return (
    <div className='bg-white px-2 pt-8 gap-4 xl:gap-6 grid grid-cols-6 h-screen'>
      {/* Sidebar wrapper */}
      <div className='grid col-span-1 xl:ml-4'>
        <Sidebar />
      </div>
      {/* Main and Main Header wrapper */}
      <div className='grid col-span-5 grid-rows-8 p-2 lg:p-4 divide-y-4'>
        <div className='h-20 flex'>
          <MainHeader />
        </div>
        <div className=''>
          <Main />
        </div>
      </div>
    </div>
  );
}
