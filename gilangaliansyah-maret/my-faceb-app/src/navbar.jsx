// Navbar.js
import React, { useState } from 'react';
import { FaFacebook, FaSearch, FaHome, FaUsers, FaVideo, FaBell, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/"); // Set default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-white shadow-md border-gray-500 p-4 flex justify-between items-center absolute top-0 left-0 w-full ">
      <div className="flex items-center space-x-4">
        <FaFacebook className="text-blue-900 text-4xl" />
        <div className="flex items-center space-x-2 bg-gray-300 rounded-full p-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="border-none outline-none bg-transparent text-white"
          />
        </div>
      </div>

      <div className="flex items-center space-x-20 justify-center" style={{ marginRight: '450px' }}>
        <Link
          to="/"
          onClick={() => handleLinkClick("/")}
          className={`text-xl ${activeLink === "/" ? 'underline text-blue-500' : 'text-gray-300'} hover:underline hover:text-blue-500`}
        >
          <FaHome />
        </Link>
        <Link
          to="/users"
          onClick={() => handleLinkClick("/users")}
          className={`text-xl ${activeLink === "/users" ? 'underline text-blue-500' : 'text-gray-300'} hover:underline hover:text-blue-500`}
        >
          <FaUsers />
        </Link>
        <Link
          to="/video"
          onClick={() => handleLinkClick("/video")}
          className={`text-xl ${activeLink === "/video" ? 'underline text-blue-500' : 'text-gray-300'} hover:underline hover:text-blue-500`}
        >
          <FaVideo />
        </Link>
        <Link
          to="/bell"
          onClick={() => handleLinkClick("/bell")}
          className={`text-xl ${activeLink === "/bell" ? 'underline text-blue-500' : 'text-gray-300'} hover:underline hover:text-blue-500`}
        >
          <FaBell />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
