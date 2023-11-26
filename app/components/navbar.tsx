import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/img/logo.png'

const Navbar = () => {
  return (
    <div className="flexgap-10 lg:gap-20 justify-between">
        <div className='flex gap-4 items-center flex-shrink-0'>
            <button></button>
            <Link to="/">
                <img src={ require('../../public/img/logo.png')} className="h-6" alt="Logo" />
            </Link>
        </div>
        <div></div>
        <div></div>
    </div>
  );
};

export default Navbar;
