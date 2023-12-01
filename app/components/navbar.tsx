import React from 'react';
import logo from '../../public/img/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-gray-800 font-bold text-lg"><img src={logo.src} /></div>
          <div className="hidden lg:flex space-x-4" id='links'>
            <a href="#" className=" text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-orange-200" id='links'>
              Home
            </a>
            <a href="#" className=" text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-orange-200" id='links'>
              About
            </a>
            <a href="#" className=" text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-orange-200" id='links'>
              Projects
            </a>
            <a href="#" className=" text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-orange-200" id='links'>
              Contact
            </a>
            <a href="#" className=" text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-orange-200" id='links'>
              Hobbies
            </a>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Sign In
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Settings
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
