import React, { useState } from 'react';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';

export const LoadingButton = () => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = () => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div className='bg-red-500 m-8 max-w-sm p-6 text-white  divide-y py-4 mx-auto'>
      <div className='flex gap-4 justify-center'>
        <button type='primary' loading>
          Loading
        </button>
        <button
          className='bg-blue-700 px-3 py-1 rounded-lg'
          size='small'
          loading
        >
          Loading
        </button>
        <button type='primary' loading>
          <DownloadingOutlinedIcon />
        </button>
      </div>

      <div className='flex items-center  gap-4 justify-center text-white'>
        <button
          type='primary'
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </button>
        <button
          className='bg-blue-700 px-3 py-1 rounded-lg gap-2 flex mt-4 '
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          <DownloadingOutlinedIcon />
          Click me!
        </button>
        <button
          type='primary'
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        >
          <DownloadingOutlinedIcon />
        </button>
      </div>
    </div>
  );
};
