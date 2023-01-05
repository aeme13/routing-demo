import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar2 = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyle} to="link1">
        Link 1
      </NavLink>
      <NavLink style={navLinkStyle} to="link2">
        Link 2
      </NavLink>
    </nav>
  );
};
