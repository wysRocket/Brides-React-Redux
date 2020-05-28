import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Catalog from "./Catalog";
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/ladcatalog-reducer";
import LoadingModal from "../../components/Loading/Loading";
import {
  getUsersSelector,
  getCurrentPage,
  getPageSize,
  getIsFetching,
  getTotalUsersCount,
  getFollowingInProgress,
} from "../../redux/users-selectors";
import { compose } from "redux";

class LadCatalogContainer extends PureComponent {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };
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
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    requestUsers,
  })
)(LadCatalogContainer);
