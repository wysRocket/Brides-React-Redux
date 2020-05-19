import React from "react";
import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="app_logo">
      <NavLink to="/main">
        Brides
        <span className="decor">dating</span>
      </NavLink>
    </div>
  );
};

export default Logo;
