import React from 'react'
import style from './ViewProfile.module.css'
import { NavLink } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap'

const ViewProfile: React.FC = () => {
  return (
    <div className={style.panel}>
      <h1 className='hello_name'>
        Welcome,
        <span> John</span>!
      </h1>
      <div className={style.info_profile}>
        Dude, your profile is only 35% complete!
        <div className='progress_bar'>
          <ProgressBar animated now={35} />
        </div>
        <p>
          To attract more ladies attention to your account - it need`s to be complete. You can check
          how does it look like now.
        </p>
        <NavLink to='/profile' className='button'>
          <button>Edit My Profile</button>
        </NavLink>
        <NavLink to='/profile' className='button'>
          <button>View My Profile</button>
        </NavLink>
      </div>
    </div>
  )
}
export default ViewProfile
