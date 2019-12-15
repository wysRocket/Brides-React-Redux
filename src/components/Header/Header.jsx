import React from 'react';
import style from'./Header.module.css';
import {NavLink} from "react-router-dom";
import DashboardPanel from '../DashboardPanel/DashboardPanel';

const Header = (props) => {
    return (
      <div>
        {props.isAuth ? <DashboardPanel/> : null}
      <header className = {style.header}>
        <div className = {style.logo}>
          <NavLink to='/main'>Brides   
            <span className={style.decor}>dating</span>
          </NavLink>
        </div>
        <nav className={style.header_nav}>
          <a href='#'> Ladies Gallerie </a>
          <a href='#'> New Profiles</a>
          <a href='#'> Available for VideoChat</a>
          <NavLink to='/ladiescatalog'> My Favorites</NavLink>
        </nav>
      </header> 
      </div>
    );
  }

  export default Header;