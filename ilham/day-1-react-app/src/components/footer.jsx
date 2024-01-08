import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <p>&copy; 2024 techblade. Hak Cipta Dilindungi</p>
      </div>
      <div>
        <img src="/images/lgr.png" alt="Logo" className="h-8 w-8 ml-auto" />
        <a href="/about" className="ml-4">Tentang Kami</a>
        <a href="/contact" className="ml-4">Hubungi Kami</a>
      </div>
    </footer>
  );
};

export default Footer;
