import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold">Your Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Trending
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Subscriptions
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Library
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;