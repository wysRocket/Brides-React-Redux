import React from 'react'
import defaultImageGirl from '../../assets/photo2.jpg'
import { NavLink } from 'react-router-dom'
import { ViewProfileButton, FollowingStarButton } from '..'
import { UserType } from '../../types/types'

type PropsType = {
  user: UserType
}
const User: React.FC<PropsType> = ({ user }) => {
  return (
    <div>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : defaultImageGirl} alt='' />
        </NavLink>
        <FollowingStarButton user={user} />
      </div>
      <div className='info_block'>
        <h3>
          {user.name}
          <span className='ind_online'> userID:{user.id}</span>
        </h3>
        <ViewProfileButton id={user.id} />
      </div>
      <span className='city_from'>
        {user.age} years old from {user.city}
      </span>
    </div>
  )
}

export default User
