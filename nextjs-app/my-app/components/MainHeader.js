import Link from 'next/link';
import React from 'react';

export default function MainHeader() {
  return (
    /* Main Header wrapper */
    <div>
      {/* Main Header container */}
      <div>
        {/* Main Header content */}
        <div>
          <ul>
            <li>
              <Link href='/'>All</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
