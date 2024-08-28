// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* Top Bar with Contact and Login */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <strong>D</strong>igital Networking
            </span>
          </a>
          {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link to="/" className="text-sm text-gray-500 dark:text-white hover:underline">Home</Link>
          <Link to="/contacts" className="text-sm text-gray-500 dark:text-white hover:underline">Contacts</Link>
          <Link to="/blog" className="text-sm text-gray-500 dark:text-white hover:underline">Blog</Link>
          <Link to="/services" className="text-sm text-grey-500 dark:text-white hover:underline">Services</Link>
        </div>
        
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">
              (555) 412-1234
            </a>
            <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </Link>
            
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
