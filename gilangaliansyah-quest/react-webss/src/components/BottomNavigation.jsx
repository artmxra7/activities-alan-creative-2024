import React from 'react';
import Examples from './Examples';

const BottomNavigation = () => {
  return (
    <nav className="bottom-nav fixed bottom-0 left-0 w-full p-2">
      <Examples />
      <ul className="flex justify-around">
        <li className="flex items-center hover:bg-gray-700">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l6-6m0 0l6 6m-6-6v12"></path>
          </svg>
          <span className="hover:text-white">Streaming</span>
        </li>
        <li className="flex items-center hover:bg-gray-700">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <span className="hover:text-white">Genre</span>
        </li>
        <li className="flex items-center hover:bg-gray-700">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7 7 7-7 7"></path>
          </svg>
          <span className="hover:text-white">Batch</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
