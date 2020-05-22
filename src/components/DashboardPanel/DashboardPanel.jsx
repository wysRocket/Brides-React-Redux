import React from "react";
import { connect } from "react-redux";
import { logout } from "./../../redux/auth-reducer";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const DashboardPanel = (props) => {
  return (
    <div className="dashpanel">
      <h3 className="panel_name">Dashboard</h3>
      <nav className="action_nav">
        <a href="#"> Inbox </a>
        <NavLink to="/chathistory"> Chats</NavLink>
        <a href="#"> Video Calls</a>
      </nav>
      <nav className="profile_nav">
        <NavLink to="/profile"> My Profile </NavLink>
        <NavLink to="/main/"> My Account </NavLink>
        <Button onClick={props.logout}> Logout</Button>
      </nav>
    </div>
  );
};

export default connect(null, { logout })(DashboardPanel);
