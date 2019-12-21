import React, { useState } from 'react';
import style from './Paginator.module.css';
import cn from 'classnames';


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)};

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
         <div className={style.lad_pagination}>
             
             { portionNumber > 1 &&
             <button onClick={ () => {setPortionNumber(portionNumber - 1)}}> PREV </button> }

             { pages.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
             .map( (p) => {
                return <div className={ cn( {[style.selected_page]:currentPage === p}, 
                    style.pag_page)}
                    key={p} 
                    onClick={ (e)=> { onPageChanged(p)} }> 
                    { p }
                </div>
             })}

            { portionCount > portionNumber && <button onClick={ () => { setPortionNumber(portionNumber+1)}}
            > NEXT </button>}
         </div>
         
)}

export default Paginator;