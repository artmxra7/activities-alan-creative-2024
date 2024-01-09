// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      <div className="flex justify-center mt-2">
        <a href="#" className="mr-4">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
