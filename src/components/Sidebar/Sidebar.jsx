import React from 'react'
import style from './Sidebar.module.css';
import {NavLink, Route, Switch} from 'react-router-dom';
import ViewProfile from './../ViewProfile/ViewProfile';
import MyPhotos from './../MyPhotos/MyPhotos';

const Sidebar = () => {
    return (
        
        <div className = {style.main_menu}>
            <div className = {style.menu_drop}>
                <ul className = {style.correspondence}> Correspondence 
                    <li> <a href='#'> Ladies  
                        <span className = {style.badge}>
                        <b>5</b>/24 </span>
                        </a>
                    </li>
                    <li> <a href='#'> Administration 
                        <span className = {style.badge}>
                        <b>1</b>/20 </span>
                        </a>
                    </li>
                    <li>< a href='#'> Draft</a> </li>
                    <li> <a href='#'> Deleted Mail</a> </li>
                    <li> <NavLink to='/chathistory'> Chat History</NavLink> </li> 
                </ul>
                <ul className = {style.ladies}> Ladies 
                    <li> <a href='#'> My favorite ladies</a> </li>
                    <li> <a href='#'> My favorite photos</a> </li>
                    <li>< a href='#'> My favorite videos</a> </li>
                    <li> <NavLink to='/ladiescatalog'> My contact list</NavLink> </li>
                    <li> <a href='#'> Online ladies</a> </li> 
                </ul>
                    <ul className = {style.services}> Services 
                    <li> <a href='#'> Phone Calls</a> </li>
                    <li> <a href='#'> Live Chats</a> </li>
                </ul>
                <ul className = {style.finances}> Finances 
                    <li>< a href='#'> My Credits</a> </li>
                    <li> <a href='#'> Buy Credits</a> </li>
                    <li> <a href='#'> Expenses History</a> </li>
                    </ul>
                <ul className = {style.myprofile}> My profile 
                    <li> <NavLink to='/main/viewprofile'> View profile</NavLink> </li>
                    <li> <NavLink to='/main/myphotos'> My photos</NavLink> </li>
                    <li>< a href='#'> Edit profile</a> </li>
                    <li> <a href='#'> Change Password</a> </li>
                    <li> <a href='#'> Log Out</a> </li>
                </ul>
            </div>
            <div>
                <Switch> 
                <Route path='/main/myphotos' render={ ()=> <MyPhotos /> } />
                <Route path='/main/' render={ ()=> <ViewProfile /> } />
                </Switch>
            </div>
        </div>
          
    );
    
};
              


export default Sidebar;