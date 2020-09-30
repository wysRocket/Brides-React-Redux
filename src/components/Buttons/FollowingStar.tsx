import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import emptyStar from '../../assets/star1.png'
import fullStar from '../../assets/star2.png'
import { follow, unfollow } from '../../redux/users-reducer'
import { AppStateType } from '../../redux/redux-store'
import { UserType } from '../../types/types'

type PropsType = {
  user: UserType
}
const FollowingStarButton: React.FC<PropsType> = ({ user }) => {
  const dispatch = useDispatch()
  const { followingInProgress } = useSelector(({ usersPage }: AppStateType) => usersPage)
  return (
    <>
      {user.followed ? (
        <img
          alt=''
          // @ts-ignore
          disabled={followingInProgress.some((id) => id === user.id)}
          src={fullStar}
          className='check_star'
          onClick={() => {
            dispatch(unfollow(user.id))
          }}
        />
      ) : (
        <img
          alt=''
          // @ts-ignore
          disabled={followingInProgress.some((id) => id === user.id)}
          src={emptyStar}
          className='check_star'
          onClick={() => {
            dispatch(follow(user.id))
          }}
        />
      )}
    </>
  )
}

export default FollowingStarButton
