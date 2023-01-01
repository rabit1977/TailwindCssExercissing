import React, { useState } from 'react';
// import { DownloadOutlined } from '@ant-design/icons';
// import { button, Radio, Space, Divider } from 'antd';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

export const LargeButtons = () => {
  const large = {
    color: 'red',
    width: '60px',
    padding: '1.2rem',
  };
  const defalt = {
    color: 'blue',
    width: '450px',
    padding: '.7rem',
  };
  const small = {
    color: 'green',
    width: '30px',
    padding: '.5rem',
  };
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
      <div className='m-8 border flex flex-col items-center justify-center h-64 max-w-lg space-y-4 mx-auto'>
        <div
          className='flex gap-4'
          value={size}
        >
          <button>
            <input
              onChange={(e) => setSize(e.target.value)}
              type='radio'
              value='large'
            />
            Large
          </button>
          <button>
            <input
              onChange={(e) => setSize(e.target.value)}
              type='radio'
              value='default'
            />
            Default
          </button>
          <button>
            <input
              onChange={(e) => setSize(e.target.value)}
              type='radio'
              value='large'
            />
            Small
          </button>
        </div>
        <div className='border-l'>Preview</div>
        <div className='space-y-4'>
          <div className='flex gap-3'>
            <button
              className='bg-[#4096ff] text-white px-4 py-1 rounded-lg shadow-md hover:bg-[#4086ff]'
              size={size}
            >
              Primary
            </button>
            <button className='border-2 border-[#4096ff] text-sky-600 px-4 py-1 rounded-lg shadow-md hover:bg-[#4086ff] hover:text-white size={size}'>
              Default
            </button>
            <button
              className='text-[#4096ff] hover:text-white px-4 py-1 rounded-lg shadow-md hover:bg-[#4086ff] border-dashed border-[#409fff] border-2'
              size={size}
            >
              Dashed
            </button>
          </div>
          <div>
            <a className='text-blue-900' href='link' size={size}>
              Link
            </a>
          </div>
          <div className='flex gap-2'>
            <button
              className='bg-sky-600 p-2 rounded-lg text-white'
              size={size}
            >
              <DownloadOutlinedIcon />
            </button>
            <button
              className='bg-sky-600 p-2 rounded-full text-white'
              size={size}
            >
              <DownloadOutlinedIcon />
            </button>
            <button
              className='bg-sky-600 p-2 rounded-full w-16 text-white'
              size={size}
            >
              <DownloadOutlinedIcon />
            </button>
            <button
              className='bg-sky-600 p-2 rounded-full text-white'
              size={size}
            >
              <DownloadOutlinedIcon />
              Download
            </button>
            <button
              className='bg-sky-600 p-2 rounded-xl text-white'
              size={size}
            >
              <DownloadOutlinedIcon />
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
