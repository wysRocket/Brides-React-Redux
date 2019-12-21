import React from 'react';
import style from './LadCatalog.module.css';
import defaultImageGirl from './../img/photo2.jpg';
import {NavLink} from 'react-router-dom';
import emptyStar from './../img/star1.png';
import fullStar from './../img/star2.png';


const User = ({user, followingInProgress, unfollow, follow}) => {
   
return (
<div className={style.lad_item}>
    <div className='anketa_block'>
        <div className="link_img">
            <NavLink to={'/profile/'+ user.id}>
                <img src={user.photos.small !=null ? user.photos.small : defaultImageGirl} alt="" />
            </NavLink>
            {user.followed ?
            <img disabled={followingInProgress.some(id=>id === user.id)}
            src = {fullStar} className={style.check_star}
            onClick={()=>{ unfollow(user.id)}} /> :
            <img disabled={followingInProgress.some(id=>id === user.id)}
            src = {emptyStar} className={style.check_star}
            onClick={()=>{ follow(user.id)}} /> }
        </div>
        <div className={style.info_block}>
            <h3 className={style.gname}>{user.name}
                <span className={style.ind_online}> userID:{user.id}</span>
            </h3>
            <NavLink to={'/profile/'+user.id} className={style.view_prof_btn}>View Profile</NavLink>
        </div>
        <span className={style.city_from}> {user.age} years old from {user.city}</span>
    </div>
</div>
)}

export default User;