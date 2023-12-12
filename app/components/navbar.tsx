import React from 'react';
import Link from 'next/link'


const Navbar: React.FC = () => {
  return (
    <nav className="p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            <Link href="/" className=" text-black font-bold py-2 px-4 rounded-full focus:outline-0 focus:shadow-outline-blue active:shadow-md" id='links'>
              Home
            </Link>
            <Link href="/" className=" text-black font-bold py-2 px-4 rounded-full focus:outline-0 focus:shadow-outline-blue active:shadow-md" id='links'>
              About
            </Link>
            <Link href="/" className=" text-black font-bold py-2 px-4 rounded-full focus:outline-0 focus:shadow-outline-blue active:shadow-md" id='links'>
              Projects
            </Link>
            <Link href="/" className=" text-black font-bold py-2 px-4 rounded-full focus:outline-0 focus:shadow-outline-blue active:shadow-md" id='links'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
