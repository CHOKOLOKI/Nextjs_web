import React from 'react';
import logo from '../../public/img/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-purple-300 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-gray-800 font-bold text-lg"><img src={logo.src} /></div>
          <div className="hidden lg:flex space-x-4" id='links'>
            <a href="#" className="bg-purple-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-purple-800">
              Home
            </a>
            <a href="#" className="bg-purple-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-purple-800">
              About
            </a>
            <a href="#" className="bg-purple-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-purple-800">
              Projects
            </a>
            <a href="#" className="bg-purple-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-purple-800">
              Contact
            </a>
            <a href="#" className="bg-purple-300 text-black font-semibold py-2 px-4 rounded-full hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-purple-800">
              Hobbies
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Sign In
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
