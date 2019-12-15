import React from 'react';
import style from './Paginator.module.css';
import {NavLink} from 'react-router-dom';


const Paginator = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

    return (
        
         <div className={style.lad_pagination}>
             { pages.map( p => {
                return <div className={props.currentPage === p && style.selected_page}
                onClick={ ()=> { props.onPageChanged(p)} }>{ p }</div>
             })}
         </div>
         
)
}

export default Paginator;