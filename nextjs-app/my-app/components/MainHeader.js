import Link from 'next/link';
import React from 'react';

const headerLinks = [
  'All',
  'Under 10 min',
  'Mixes',
  'Javascript',
  'Live',
  'Music',
  'Tools',
  'Computer Programming',
  'Debates',
  'Games',
];

export default function MainHeader() {
  return (
    <div className=''>
      <ul className='flex space-x-4'>
        {headerLinks.map((l, i) => (
          <li
            key={l}
            className='group first:bg-black/90 first:text-white first:hover:bg-black/70 flex whitespace-nowrap text-slate-900 font-medium text-lg bg-slate-100 hover:bg-slate-200/90 px-6 py-2 rounded-md shadow-sm cursor-pointer'
          >
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
