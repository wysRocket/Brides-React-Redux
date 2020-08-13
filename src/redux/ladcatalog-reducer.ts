import { AppStateType } from "./redux-store"
import { UserType } from "./../types/types"
import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/object-helpers"
import { ThunkAction } from "redux-thunk"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: "Daryna",
      age: "23",
      city: "Gomel",
      photos: { small: "null" },
    },
    {
      id: 2,
      followed: true,
      name: "Maryna",
      age: "24",
      city: "Mykolaiv",
      photos: { small: "null" },
    },
    {
      id: 3,
      followed: true,
      name: "Galyna",
      age: "25",
      city: "Kyiv",
      photos: { small: "null" },
    },
    {
      id: 4,
      followed: true,
      name: "Malyna",
      age: "26",
      city: "Mykolaiv",
      photos: { small: "null" },
    },
    {
      id: 5,
      followed: false,
      name: "Kalyna",
      age: "27",
      city: "Lviv",
      photos: { small: "null" },
    },
  ] as Array<UserType>,
  pageSize: 6,
  totalUsersCount: 36,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
}
type InitialStateType = typeof initialState
const ladCatalogReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    //      updateObjectInArray(state.users, action.userId, "id", {followed: true})
    //  }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      }
    }
    default:
      return state
  }
}
type ActionsTypes =
  | FollowSuccessActionType
  | UnfollowSuccessActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleIsFetchingActionType
  | ToggleFollowingProgressActionType

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })
type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
  type: UNFOLLOW,
  userId,
})
type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
})
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressActionType => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
  }
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.followUser(userId)
    if (data.resultCode == 0) dispatch(followSuccess(userId))
    dispatch(toggleFollowingProgress(false, userId))
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.unfollowUser(userId)
    if (data.resultCode == 0) dispatch(unfollowSuccess(userId))
    dispatch(toggleFollowingProgress(false, userId))
  }
}
export default ladCatalogReducer
