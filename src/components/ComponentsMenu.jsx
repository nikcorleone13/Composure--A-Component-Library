import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  fontWeight: isActive ? "600" : "400",
  color: isActive ? "#36486b" : "black",
  borderBottom: isActive ? "2px solid #36486b" : "none"
});
const ComponentsMenu = () => {
  return (
    <>
      <nav
        className=" sticky w-[20%] lg:w-[15%] flex flex-col 
      gap-5 text-lg border-r-2 border-gray-400 "
      >
        <NavLink style={activeStyle} to="/components/alert">
          Alert
        </NavLink>
        <NavLink style={activeStyle} to="/components/avatar">
          Avatar
        </NavLink>
        <NavLink style={activeStyle} to="/components/badge">
          Badge
        </NavLink>
        <NavLink style={activeStyle} to="/components/button">
          Button
        </NavLink>
        <NavLink style={activeStyle} to="/components/card">
          Card
        </NavLink>
        <NavLink style={activeStyle} to="/components/typography">
          Typography
        </NavLink>
        <NavLink style={activeStyle} to="/components/image">
          Image
        </NavLink>
      </nav>
    </>
  );
};
export default ComponentsMenu;
