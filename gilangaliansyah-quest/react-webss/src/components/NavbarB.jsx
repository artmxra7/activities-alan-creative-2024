// Navbar.jsx
import React from 'react';
import Example from './Example';

const NavbarB = () => {
  return (
    <div>
      <Example />
      <nav className="p-4 ">
        <button className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer">Streaming</button>
        <button className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer">Genre</button>
        <button className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer">Batch</button>
      </nav>

      <footer className="bg-black p-4 text-white text-center">
        <p>&copy; 2023 AnimeStreamHub</p>
        <p className="mt-5">
          kakkoinime adalah destinasi utama Anda untuk menonton streaming anime terbaru dan terbaik. Meresapi diri Anda dalam dunia
          cerita yang memikat, karakter yang berwarna, dan animasi yang memukau. Jelajahi berbagai genre dan temukan serial dan film anime
          favorit Anda yang baru.
        </p>
        <p className="mt-5">
          Hubungi Kami: support@kakkoinime.com | Telepon: (123) 456-7890
        </p>
      </footer>
    </div>
  );
};

export default NavbarB;
