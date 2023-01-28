import React from 'react';

const onMenuClick = (e) => {
  console.log('click', e);
};
const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];
export const DropdownButton = () => (
  <div className='flex gap-4 justify-center bg-slate-200 max-w-sm mx-auto p-4 rounded-xl shadow-lg border text-2xl'>
    <button className='bg-blue-600 px-4 py-1 capitalize  shadow-sm text-white rounded-lg leading-8'>
      primary
    </button>
    <button className='bg-blue-600 px-4 py-1 capitalize  shadow-sm text-white rounded-lg leading-8'>
      secondary
    </button>
    <select className='appearance-none outline-none'>
      {items.map((item) => (
        <option  value={item.label} key={item.key}>
          {item.label}
        </option>
      ))}
    </select>
    {/* <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      Actions
    </Dropdown.Button> */}
  </div>
);
