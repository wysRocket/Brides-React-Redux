import React from "react"
import { Paginator, User } from "../../components"
import { UserType } from "../../types/types"

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}
const LadCatalog: React.FC<PropsType> = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <h3 className='res_search_titile'>
        Results:
        <span> {totalUsersCount} </span>
        ladies
      </h3>

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
      />

      <div className='catalog'>
        {users.map((u) => (
          <User
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            user={u}
          />
        ))}
      </div>
    </div>
  )
}

export default LadCatalog
