import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='bg-[#F0F2F5]'>
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
