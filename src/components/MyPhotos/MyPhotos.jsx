import React, {useEffect} from 'react';
import style from './MyPhotos.module.css';
import photo1 from './../img/danny.jpg';
import photo2 from './../img/danny2.jpg';
import photo3 from './../img/danny3.jpg';
import photo4 from './../img/Rise-Of-Skywalker.jpg'
import photo5 from './../img/sw.jpg'
import LoadingModal from './../Loading/Loading';

const MyPhotos = (props) => {
        
    if (!props.profile) {return <LoadingModal/>}

    const onMainPhotoSelecetd = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className = {style.photo_panel}>
            <h1 className = 'hello_name'>
                My Photos
            </h1>
            
            <img src={props.profile.photos.large || photo3} alt="" />
            <img src={photo1} alt className="img_responsive"/>
            <img src={photo2} alt=""/>
            <img src={photo5} alt=""/>
            <img src={photo4} alt=""/>
            <img src={photo3} alt=""/>
            <div className ={style.upload_block} >
                Upload Photos
                
            <p>Browse the photos on your device and select wich of them do you want to upload.</p>
            
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelecetd}/>}
            
            </div>
        </div>
    );
}
export default MyPhotos;