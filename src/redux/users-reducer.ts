import { InferActionsTypes, BaseThunkType } from './redux-store'
import { UserType } from '../types/types'
import { usersAPI } from '../api/users-api'
import { updateObjectInArray } from '../utils/object-helpers'

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: 'Daryna',
      age: '23',
      city: 'Gomel',
      photos: { small: 'null' },
    },
    {
      id: 2,
      followed: true,
      name: 'Maryna',
      age: '24',
      city: 'Mykolaiv',
      photos: { small: 'null' },
    },
    {
      id: 3,
      followed: true,
      name: 'Galyna',
      age: '25',
      city: 'Kyiv',
      photos: { small: 'null' },
    },
    {
      id: 4,
      followed: true,
      name: 'Malyna',
      age: '26',
      city: 'Mykolaiv',
      photos: { small: 'null' },
    },
    {
      id: 5,
      followed: false,
      name: 'Kalyna',
      age: '27',
      city: 'Lviv',
      photos: { small: 'null' },
    },
  ] as Array<UserType>,
  pageSize: 6,
  totalUsersCount: 36,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
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
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case 'SET_USERS': {
      return { ...state, users: action.users }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return { ...state, totalUsersCount: action.count }
    }
    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching }
    }
    case 'TOGGLE_FOLLOWING_IN_PROGRESS': {
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

export const actions = {
  followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({ type: 'TOGGLE_FOLLOWING_IN_PROGRESS', isFetching, userId } as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const data = await usersAPI.followUser(userId)
    if (data.resultCode == 0) dispatch(actions.followSuccess(userId))
    dispatch(actions.toggleFollowingProgress(false, userId))
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    const data = await usersAPI.unfollowUser(userId)
    if (data.resultCode == 0) dispatch(actions.unfollowSuccess(userId))
    dispatch(actions.toggleFollowingProgress(false, userId))
  }
}
export default usersReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
