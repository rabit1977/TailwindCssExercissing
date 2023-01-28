import React, { useState } from 'react';
import './index.css';
// import { Button, Slider, Space } from 'antd';

export const Sliders = () => {
  const [size, setSize] = useState(8);

  return (
    <>
      <div>
        <input
          type='range'
          
          value={size}
          onChange={(value) => setSize(value)}
        />
        <br />
        <br />
        <div className={` space-x-${size} bg-red-500`}>
          <button type='primary'>Primary</button>
          <button>Default</button>
          <button type='dashed'>Dashed</button>
          <button type='link'>Link</button>
        </div>
      </div>
    </>
  );
};
