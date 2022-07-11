import React from 'react';
import logo from '../public/logo.svg';
import curriculum from '../public/Curriculum.pdf';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-10 left-0 w-full backdrop-blur-sm px-2 sm:px-4 py-6 rounded">
      <div className="container max-w-7xl flex flex-wrap justify-between items-center mx-auto">
        <img src={logo} className="h-3 sm:h-9" alt="Logo" />

        <div>
          {/* <NavLink value={'Home'} />
          <NavLink value={'Portfolio'} />
          <NavLink value={'Contact'} /> */}
          <p className="py-2 px-4 text-lg tracking-widest font-medium">
            Sebastian Varona
          </p>
        </div>

        <NavCV value={'CV'} />
      </div>
    </nav>
  );
}

export function NavLink({ value }) {
  return <button className="py-2 px-4 font-medium">{value}</button>;
}

export function NavCV({ value }) {
  return (
    <a
      href={curriculum}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="py-2 px-4 font-medium bg-green-500 hover:bg-green-600 transition-colors rounded-3xl flex gap-2 items-center"
    >
      {value}{' '}
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        ></path>
      </svg>
    </a>
  );
}
