import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSolidComponent } from "react-icons/bi";
const activeStyle = ({isActive}) =>({
  fontWeight: isActive? '600':"400"
})
export const Navbar = () => {
  return (
    <div className='bg-bgPrimary px-8 py-3 text-xl border-b-2'>
      <div className='mx-auto flex justify-between items-center p-1 '>
        <h1 className='w-1/4 text-left text-3xl font-bold uppercase text-textPrimary'><Link to="/" className=' flex justify-center items-center '>Composure<span className='mt-[-5px] text-4xl'><BiSolidComponent /></span></Link> </h1>
        <input placeholder='Search Component' className='w-1/3 py-3 px-4 rounded-3xl focus:outline-none border-2 border-blue-950  ' />
        <nav className='w-1/4 flex justify-evenly lg:justify-center gap-6 lg:gap-16 text-2xl  text-textPrimary '>
          <NavLink to="/" style={activeStyle} className="" >Home</NavLink>
          <NavLink to="/components" style={activeStyle} className="" >Components</NavLink>
        </nav>
      </div>
    </div>
  );
};
