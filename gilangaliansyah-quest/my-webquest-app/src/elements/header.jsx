// src/Header.js
import { CiShoppingCart } from "react-icons/ci";
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border border-black bg-white-800 text-white p-4 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center">
            <img
                src="./src/picture/Logo2.png" // tempatkan logo disini
                alt="Logo"
                className="h-8 w-41 mr-2"
            />
      </div>

      {/* Input type search */}
      <input
            type="text"
            placeholder="search"
            className="border rounded-full px-4 py-2 focus:outline-none text-black"
            style={{marginLeft: '100px', width: '500px', backgroundColor: 'rgba(239, 242, 251, 1)', fontSize: '16px', /* tambahkan gaya lain sesuai kebutuhan */ }}
        />  
        
        {/* Search Icon */}
        <div className="flex items-center space-x-4">
        

        {/* Keranjang */}
        <span><CiShoppingCart /></span>
        <svg
            xmlns=""
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-10 h-10 cursor-pointer rounded-full border border-black" // Mengganti nilai w-6 h-6 menjadi lebih besar
            >
            <circle cx="6" cy="21" r="3" /> {/* Mengganti nilai r menjadi lebih besar */}
            <circle cx="17" cy="21" r="3" /> {/* Mengganti nilai r menjadi lebih besar */}
            <path d="M17 19h-11v-14h-2" />
            <path d="M6 17s.934-3 3-3h8c2.066 0 3 3 3 3" />
        </svg>

        {/* Garis pembatas */}
        <div className="h-10 border-r border-gray-400 mx-4"></div>

        {/* Login & Register */}
        <div className="flex items-center space-x-4">

                <button className="text-sm rounded-full px-4 py-2 border border-black text-black w-[110px]" onClick={() => window.location.href = "/Login"}>
                 Login
                </button>
          

                <button className="text-sm rounded-full px-4 py-2 border border-black text-white bg-blue-500 w-[110px]" onClick={() => window.location.href="/Register"}>
                 Register
                </button>
            
        </div>
      </div>
    </header>
  );
};

export default Header;
