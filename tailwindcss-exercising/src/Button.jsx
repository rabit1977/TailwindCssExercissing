import React from 'react';
// import { SearchOutlined } from '@ant-design/icons';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import { Button, Tooltip, Space } from 'antd';

export const Button = () => (
  <div className='flex flex-col border max-w-lg items-center justify-center mx-auto mt-8 h-48'>
    <div className='flex flex-wrap gap-2'>
      <button className='rounded-full bg-[#4096ff] text-white px-4 py-1 hover:bg-[#4086ff]'>
        A
      </button>
      <button className='group relative rounded-full bg-[#4096ff] text-white px-4 py-1 hover:bg-[#4086ff]'>
        <span class="absolute hidden group-hover:flex -left-[44px] top-24 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:-top-[30%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-gray-700">
          This is some extra useful information
        </span>
        <SearchOutlinedIcon />
        Search
      </button>
      <div className=' flex-col flex'>
        <button className='group relative rounded-full bg-[#4096ff] text-white px-4 py-1 hover:bg-[#4086ff]'>
          <span class="absolute hidden group-hover:flex -left-[70px] -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
            This is some extra useful information
          </span>
          <SearchOutlinedIcon />
        </button>
      </div>
      <div className='group relative'>
        <button className='bg-[#4096ff] text-white px-4 py-1 hover:bg-[#4086ff] rounded-full'>
          <span class="absolute hidden group-hover:flex -top-2 -right-3 translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent z-20 before:border-r-gray-700">
            This is some extra useful information
          </span>
          <SearchOutlinedIcon />
        </button>
      </div>
      <button className='group relative bg-[#4096ff] text-white px-4 py-1 hover:bg-[#4086ff] rounded-full'>
        <span class="absolute hidden group-hover:flex -top-2 -left-3 -translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:left-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-gray-700">
          This is some extra useful information
        </span>
        <SearchOutlinedIcon />
        Search
      </button>
    </div>
    {/* <Space wrap>
      <Tooltip title='search'>
        <Button shape='circle' icon={<SearchOutlinedIcon />} />
      </Tooltip>
      <Button icon={<SearchOutlinedIcon />}>Search</Button>
      <Tooltip title='search'>
        <Button type='dashed' shape='circle' icon={<SearchOutlinedIcon />} />
      </Tooltip>
      <Button type='dashed' icon={<SearchOutlinedIcon />}>
        Search
      </Button>
      <Button icon={<SearchOutlinedIcon />} href='https://www.google.com' />
    </Space> */}
  </div>
);
export default Button;
