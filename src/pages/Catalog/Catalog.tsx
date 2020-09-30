import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Paginator, User, LoadingModal } from '../../components'
import { requestUsers } from '../../redux/users-reducer'
import { AppStateType } from '../../redux/redux-store'

const LadCatalog: React.FC = () => {
  const dispatch = useDispatch()
  const { isFetching, currentPage, totalUsersCount, pageSize, users } = useSelector(
    ({ usersPage }: AppStateType) => usersPage
  )

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize))
  }
  React.useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize))
  }, [currentPage])

  return (
    <>
      {isFetching ? <LoadingModal /> : null}
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
            <User key={u.id} user={u} />
          ))}
        </div>
      </div>
    </>
  )
}

export default LadCatalog
