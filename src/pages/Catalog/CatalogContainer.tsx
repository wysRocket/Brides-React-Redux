import React from "react"
import { connect } from "react-redux"
import Catalog from "./Catalog"
import { follow, unfollow, requestUsers } from "../../redux/ladcatalog-reducer"
import LoadingModal from "../../components/Loading/Loading"
import {
  getUsersSelector,
  getCurrentPage,
  getPageSize,
  getIsFetching,
  getTotalUsersCount,
  getFollowingInProgress,
} from "../../redux/users-selectors"
import { compose } from "redux"
import { UserType } from "../../types/types"
import { AppStateType } from "../../redux/redux-store"

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
  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props
    this.props.requestUsers(pageNumber, pageSize)
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <LoadingModal /> : null}
        <Catalog
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          totalUsersCount={this.props.totalUsersCount}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
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
