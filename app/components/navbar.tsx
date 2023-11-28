import { useState } from 'react';
import logo from '../../public/img/logo.png';
// import CollapsedNavbar from './collpasenav';

const Navbar: React.FC = () => {
  const [isCollpased, setIsCollapsed] = useState(false);

  const toggleCollapse = () =>{
    setIsCollapsed(!isCollpased)
  }

  return (
    <nav className="bg-purple-300 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-gray-800 font-bold text-lg">
            <img className="rounded-full w-96 h-96" src={logo.src} alt="image description"/>
         </div>
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
        {/* <div className="flex items-center space-x-4">
        <label className="relative inline-flex items-center me-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
        </div> */}
      </div>
      {/* <button onClick={toggleCollapse}></button>
      isCollapsed && <CollapsedNavbar /> */}
    </nav>
  );
};

export default Navbar;
