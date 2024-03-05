// Up.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Up = () => {
  return (
    <div>
      <nav className="p-4 flex justify-center">
        <Link to="/in-theaters" className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer" style={{ width: '400px' }}>Theaters</Link>
        <Link to="/tv-shows" className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer" style={{ width: '400px' }}>TV-Shows</Link>
        <Link to="/top-rated" className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer" style={{ width: '400px' }}>Top Rated</Link>
      </nav>
    </div>
  );
};

export default Up;