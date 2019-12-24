import {usersAPI} from './../api/api';
import {updateObjectInArray} from './../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
      
  users : [
    {id: 1, followed: false, name: 'Daryna', age: '23', city: 'Gomel', photos: {small: 'null'}},
    {id: 2, followed: true, name: 'Maryna', age: '24', city: 'Mykolaiv', photos: {small: 'null'}},
    {id: 3, followed: true, name: 'Galyna', age: '25', city: 'Kyiv', photos: {small: 'null'}},
    {id: 4, followed: true, name: 'Malyna', age: '26', city: 'Mykolaiv', photos: {small: 'null'}},
    {id: 5, followed: false, name: 'Kalyna', age: '27', city: 'Lviv', photos: {small: 'null'}},
  ],
  pageSize: 6,
  totalUsersCount: 36,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const ladCatalogReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
  case FOLLOW:
    return {
      ...state, users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: true}
        }
        return u;
      })}
//      updateObjectInArray(state.users, action.userId, "id", {followed: true})
//  }
  case UNFOLLOW:
        return {...state, users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })}
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {...state, 
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id=>id !=action.userId)}
    }
    default: return state;
}}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId});
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items))
          dispatch(setTotalUsersCount(data.totalCount))
          }
}

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await usersAPI.followUser(userId)
            if (data.resultCode == 0)
            dispatch(followSuccess(userId)) 
    dispatch(toggleFollowingProgress(false, userId));
          }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await usersAPI.unfollowUser(userId)
            if (data.resultCode == 0)
            dispatch(unfollowSuccess(userId)) 
    dispatch(toggleFollowingProgress(false, userId));
          }
}
export default ladCatalogReducer; 