// src/Profile.jsx

import React, { useState } from 'react';
import Navigationprf from '../components/fragments/prfnav';

function Profile() {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col bg-white shadow-md rounded p-6 mb-4 relative z-10"> 
        <div className="mr-6">
          <img
            src="https://i.pinimg.com/736x/46/fa/9f/46fa9fb96cd394a33da6ef8082fbd248.jpg"
            alt="Profile Picture"
            className="rounded-full w-16 h-16 mb-2"
          />
        </div>
        <div
          className={`details transition-max-height overflow-hidden ${
            expanded ? 'max-h-48' : 'max-h-0'
          }`}
        >
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">ilham</h2>
            <p className="text-sm text-gray-600">Web Developer</p>
          </div>
          <p>Email: ilham-gans@gmail.com</p>
          <p>Location: Jakarta, Indonesia</p>
          <p>Skills: HTML, CSS, JavaScript, PHP</p>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded focus:outline-none"
          onClick={toggleDetails}
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      <div className="absolute bottom-0 w-full z-0">
        <Navigationprf />
      </div>
    </div>
  );
}

export default Profile;
