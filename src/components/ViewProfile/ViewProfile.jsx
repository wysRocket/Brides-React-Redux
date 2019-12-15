import React from 'react'
import style from './ViewProfile.module.css'

const ViewProfile = () => {
    return (
        <div className = {style.panel}>
            <h1 className = 'hello_name'>
                Welcome, 
                <span> John</span>
                !
            </h1>
            <div className ={style.info_profile} >
                Dude, your profile is only 35% complete!
                <div className="progress_bar">
                        
                    <span className="sr-only">!!! 35% Complete !!!</span>
                        
                    </div>
            <p>To attract more ladies attention to your account - it need`s to be complete. 
            You can check how does it look like now.</p>
            <a href ='#' className="button"><button>Edit My Profile</button></a>
            <a href ='#' className="button"><button>View My Profile</button></a>
            </div>
        </div>
    );
}
export default ViewProfile;