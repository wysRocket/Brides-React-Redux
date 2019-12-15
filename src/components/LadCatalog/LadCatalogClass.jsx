import React from 'react';
import style from './LadCatalog.module.css';
import defaultImageGirl from './../img/photo2.jpg';
import {NavLink} from 'react-router-dom';
import emptyStar from './../img/star1.png';
import fullStar from './../img/star2.png';
import Paginator from '../Paginator/Paginator';

const LadCatalog = (currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props) => {
    
    return (
        <div className={style.ladies_catalog}>
         <h3 className={style.res_search_titile}> Results: 
            <span> {props.totalUsersCount} </span>
            ladies
         </h3>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                    totalUsersCount={totalUsersCount}/>
         
         <div className={style.catalog}>
            {users.map( u => <div key={u.id}>
            
                <div className='anketa_block'>
                    <div className="link_img">
                        <NavLink to={'/profile/'+ u.id}>
                            <img src={defaultImageGirl} alt=""/>
                        </NavLink>
        {u.followed ?    
        <img disabled={props.followingInProgress.some(id=>id === u.id)} 
            src = {fullStar} className={style.check_star} 
            onClick={()=>{ props.unfollow(u.id)}} /> :
        <img disabled={props.followingInProgress.some(id=>id === u.id)}
            src = {emptyStar} className={style.check_star} 
            onClick={()=>{ props.follow(u.id)}} /> }        
                    </div>
                    <div className={style.info_block}>
                        <h3 className={style.gname}>{u.name}
                            <span className={style.ind_online}> userID:{u.id}</span>
                        </h3>
                <NavLink to={'/profile/'+u.id} className={style.view_prof_btn}>View Profile</NavLink>
                    </div>
                    <span className={style.city_from}> {u.age} years old from {u.city}</span>
                </div>    
            </div>)}
        </div>
    </div>
)
}

export default LadCatalog;