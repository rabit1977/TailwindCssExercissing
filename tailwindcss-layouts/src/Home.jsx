import React from 'react';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className=' w-full  grid grid-cols-4 p-2'>
      <div className=''>
        <Sidebar />
      </div>
    
    </div>
  );
}
