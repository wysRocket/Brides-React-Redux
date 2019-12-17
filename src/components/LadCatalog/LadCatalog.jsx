import React from 'react';
import style from './LadCatalog.module.css';
import User from './User';
import Paginator from '../Paginator/Paginator';

const LadCatalog = (currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props) => {
    
    return (
        <div className={style.ladies_catalog}>
         <h3 className={style.res_search_titile}> Results: 
            <span> {totalUsersCount} </span>
            ladies
         </h3>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                    totalUsersCount={totalUsersCount}/>
         
         <div className={style.catalog}>
            { users.map( u => <User key={u.id} followingInProgress={props.followingInProgress} 
                unfollow={props.unfollow} follow={props.follow} user={u}/> )}
        </div>
    </div>
)
}

export default LadCatalog;