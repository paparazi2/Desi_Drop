import React from 'react';
import { NavLink } from 'react-router-dom';
import a from '../assets/assets'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-4 font-medium bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center">
        <img
          className="h-8 w-auto object-contain hover:scale-105 transition-transform duration-200"
          src={a.logoo}
          alt="DESIDROP"
        />
      </div>
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 group hover:text-blue-600 transition-colors duration-200 ${
              isActive ? 'text-blue-600' : ''
            }`
          }
        >
          <p className="font-semibold tracking-wide">HOME</p>
          <hr className='w-full border-none h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out group-[.active]:scale-x-100'/>
        </NavLink>
        
        <NavLink 
          to='/collection' 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 group hover:text-blue-600 transition-colors duration-200 ${
              isActive ? 'text-blue-600' : ''
            }`
          }
        >
          <p className="font-semibold tracking-wide">COLLECTION</p>
          <hr className='w-full border-none h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out group-[.active]:scale-x-100'/>
        </NavLink>
        
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 group hover:text-blue-600 transition-colors duration-200 ${
              isActive ? 'text-blue-600' : ''
            }`
          }
        >
          <p className="font-semibold tracking-wide">ABOUT</p>
          <hr className='w-full border-none h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out group-[.active]:scale-x-100'/>
        </NavLink>
        
        <NavLink 
          to='/contact' 
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 group hover:text-blue-600 transition-colors duration-200 ${
              isActive ? 'text-blue-600' : ''
            }`
          }
        >
          <p className="font-semibold tracking-wide">CONTACT</p>
          <hr className='w-full border-none h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out group-[.active]:scale-x-100'/>
        </NavLink>
      </ul>
      
      <div className="sm:hidden">
        <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
