import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import LadCatalog from './LadCatalog';
import {follow, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers } from '../../redux/ladcatalog-reducer';
import LoadingModal from '../Loading/Loading';
import {getUsersSelector, getCurrentPage,getPageSize, getIsFetching,getTotalUsersCount, getFollowingInProgress} from './../../redux/users-selectors'
import { compose } from 'redux';

class LadCatalogContainer extends PureComponent {
    
componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render () {
        
        return <>
        { this.props.isFetching ? <LoadingModal/> : null }
        <LadCatalog onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            followingInProgress={this.props.followingInProgress}
                            
            /> 
        </> 
        };
    }

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect (mapStateToProps, {follow , unfollow, setCurrentPage,
    toggleIsFetching, toggleFollowingProgress, requestUsers})) 
    (LadCatalogContainer);
