import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <>
      <div className='flex justify-center h-screen bg-red-400 '>
        <Home />
      </div>
    </>
  );
}

export default App;
