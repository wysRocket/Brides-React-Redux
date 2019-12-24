import React from 'react';
import heartLoadPic from './../img/heart-load.png';
import style from './Loading.module.css';

const LoadingModal = () => {
    return (
    <div className={style.myModal} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div className={style.modal_dialog}>
            <div className={style.modal_my_content}>
                Loading content...
                <img src={heartLoadPic} alt="loading" className={style.load_img}/>
            </div>
        </div>
    </div>
    )
}

export default LoadingModal;