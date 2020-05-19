import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMain = (props) => {
  return (
    <div className="app_header_nav">
      <NavLink to="/ladiescatalog"> Ladies Gallerie </NavLink>
      <NavLink to="/ladiescatalog"> New Profiles</NavLink>
      <NavLink to="/chathistory"> Available for VideoChat</NavLink>
      <NavLink to="/ladiescatalog"> My Favorites</NavLink>
    </div>
  );
};

export default NavbarMain;
