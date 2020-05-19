import React from "react";
import { Logo, DashboardPanel, NavbarMain } from "..";

const Header = (props) => {
  return (
    <>
      <div>{props.isAuth ? <DashboardPanel /> : null}</div>
      <div className="app_header">
        <Logo />
        <NavbarMain />
      </div>
    </>
  );
};

export default Header;
