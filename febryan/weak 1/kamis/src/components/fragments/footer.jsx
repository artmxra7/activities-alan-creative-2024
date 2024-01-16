import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white p-4 sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center">
        <img src="../images/logo.png" alt="logo" className="h-10 w-30" />
        <p className="ml-3">&copy; 2024 Zeverus. All Right Reserved</p>
      </div>
      <div className="mt-4 sm:mt-0">
        <a href="/third" className="ml-4">Tentang Kami</a>
      </div>
    </footer>
  );
}

export default Footer;
