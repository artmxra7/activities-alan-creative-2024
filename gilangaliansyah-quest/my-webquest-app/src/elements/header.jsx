// Header.jsx
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Login', path: '/Login' },
    { id: 3, text: 'Register', path: '/Register' },
    { id: 4, text: 'Coba', path: '/Coba' },
  ];

  return (
    <div className={`bg-white text-black border ${nav ? 'h-screen' : 'h-24'} relative`}>
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center mt-2">
        <span className="w-20 cursor-pointer">Logo</span>

        <ul className={`hidden md:flex ${nav ? 'opacity-0' : 'opacity-100'} items-center`}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`p-4 border rounded-xl m-2 cursor-pointer duration-300 hover:text-black ${
                index === 0 ? 'flex items-center' : ''
              }`}
              onClick={closeNav} // menutup navigation
            >
              {index === 0 ? (
                <>
                  <span>{item.text}</span>
                </>
              ) : (
                <Link to={item.path}>{item.text}</Link>
              )}
            </li>
          ))}
          <li className="p-4 flex items-center">
            <button className="text-black focus:outline-none">
              <AiOutlineSearch size={20} />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-b border-[#00df9a] text-black focus:outline-none ml-2"
            />
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <ul
        className={`${
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }`}
      >
        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>Logo</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={closeNav} // Close the navigation when a menu item is clicked
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
