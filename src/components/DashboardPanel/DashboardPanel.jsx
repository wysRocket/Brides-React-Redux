import React from 'react';
import style from'./DashBP.module.css';
import { connect } from 'react-redux';
import { logout } from './../../redux/auth-reducer';

const DashboardPanel = (props) => {
    return (
      <div className = {style.dashpanel}>
      <h3 className = {style.panel_name}>Dashboard</h3>
        
        <nav className={style.action_nav}>
          <a href='#'> Inbox </a>
          <a href='#'> Chats</a>
          <a href='#'> Video Calls</a>
        </nav>

        <nav className={style.profile_nav}>
          <a href='#'> My Profile </a>
          <a href='#'> My Account </a>
          <button onClick={props.logout}> Logout </button>
        </nav>
        </div>
    );
  }

  export default connect (null, { logout }) (DashboardPanel);