import React from 'react'
import { connect } from 'react-redux'
import Catalog from './Catalog'
import { follow, unfollow, requestUsers } from '../../redux/users-reducer'
import LoadingModal from '../../components/Loading/Loading'
import {
  getUsers,
  getUsersSelector,
  getCurrentPage,
  getPageSize,
  getIsFetching,
  getTotalUsersCount,
  getFollowingInProgress,
} from '../../redux/users-selectors'
import { compose } from 'redux'
import { UserType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class LadCatalogContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <LoadingModal /> : null}
        <Catalog />
      </>
    )
  }
}

const mapStateToProps = (state: any): MapStateToPropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
  })
)(LadCatalogContainer)
