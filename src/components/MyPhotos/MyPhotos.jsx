import React from 'react'
import style from './MyPhotos.module.css'
import photo1 from './../img/danny.jpg'
import photo2 from './../img/danny2.jpg'
import photo3 from './../img/danny3.jpg'

const MyPhotos = () => {
    return (
        <div className = {style.photo_panel}>
            <h1 className = 'hello_name'>
                My Photos
            </h1>

            <img src={photo1} alt className="img_responsive"/>
            <img src={photo2} alt=""/>
            <img src={photo3} alt=""/>
            <img src={photo3} alt=""/>
            <div className ={style.upload_block} >
                Upload Photos
                
            <p>Browse the photos on your device and select wich of them do you want to upload.</p>
            <a href ='#' className="button"><button>Select Photos</button></a>
            
            </div>
        </div>
    );
}
export default MyPhotos;