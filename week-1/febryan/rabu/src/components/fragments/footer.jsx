import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-blue-300 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="../images/logo.png" alt="logo" className="h-10 w-30" />
        <p className="ml-3">&copy; 2024 Zeverus. All Right Reserved</p>
      </div>
      <div className="flex items-center">
        <a href="/about" className="ml-4">Tentang Kami</a>

      </div>
    </footer>
  );
}

export default Footer;
