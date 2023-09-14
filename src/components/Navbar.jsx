import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiSolidComponent } from "react-icons/bi";
import {FaGithub} from 'react-icons/fa6'
import { componentsData } from "../pages/Components";


const activeStyle = ({ isActive }) => ({
  fontWeight: isActive ? "600" : "400",
});

export const Navbar = () => {
  const [searchText,setSearchText] = useState();
  const navigate = useNavigate();
  const handleSearchText = (e) =>{
    setSearchText(e.target.value)

    const find = componentsData.find(({component}) => component.toLowerCase() === e.target.value.toLowerCase())
    if ( find) {
      navigate(`/components/${e.target.value}`)
      
    } else {
      navigate("/components/*")
      
    }
  }
  return (
    <div className="bg-bgPrimary px-8 py-3 text-xl border-b-2">
      <div className="mx-auto flex justify-between items-center p-1 ">
        <h1 className="w-1/4 text-left text-3xl font-bold uppercase text-textPrimary">
          <Link to="/" className=" flex justify-center items-center ">
            Composure
            <span className="mt-[-5px] text-4xl">
              <BiSolidComponent />
            </span>
          </Link>{" "}
        </h1>

        {/* search bar */}
        <input
          placeholder="Search Component"
          className="w-1/3 py-3 px-4 rounded-3xl focus:outline-none border-2 border-blue-950 "
          onChange={(e) =>handleSearchText(e)}
        />

        <nav className="w-1/4 flex justify-evenly lg:justify-center gap-3 lg:gap-8 text-2xl  text-textPrimary ">
          <NavLink to="/" style={activeStyle} className="">
            Home
          </NavLink>
          <NavLink to="/components" style={activeStyle} className="">
            Components
          </NavLink>
          <NavLink to="https://github.com/nikcorleone13/Composure--A-Component-Library" target="_blank" className="flex items-center gap-2">
          Docs <FaGithub />{" "}
        </NavLink>
        </nav>
      </div>
    </div>
  );
};
