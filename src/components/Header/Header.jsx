import React from 'react';
import style from'./Header.module.css';
import {NavLink} from "react-router-dom";
import DashboardPanel from '../DashboardPanel/DashboardPanel';

const Header = (props) => {
    return (
      <div>
        {props.isAuth ? <DashboardPanel/> : null}
      <div className = {style.app_header}>
        <div className = {style.app_logo}>
          <NavLink to='/main'>Brides   
            <span className={style.decor}>dating</span>
          </NavLink>
        </div>
        <div className={style.app_header_nav}>
          <NavLink to='/ladiescatalog'> Ladies Gallerie </NavLink>
          <a href='#'> New Profiles</a>
          <NavLink to='/chathistory'> Available for VideoChat</NavLink>
          <NavLink to='/ladiescatalog'> My Favorites</NavLink>
        </div>
      </div> 
      </div>
    );
  }

  export default Header;