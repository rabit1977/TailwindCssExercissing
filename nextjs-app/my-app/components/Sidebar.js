import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
  return (
    /* Sidebar wrapper */
    <div>
      {/* Sidebar container */}
      <div>
        {/* Sidebar home wrapper */}
        <div>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </ul>
        </div>
        {/* Sidebar ibrary wrapper */}
        <div></div>
        {/* Sidebar Subscriptions */}
      </div>
    </div>
  );
}
