import { profileAPI } from '../api/profile-api'
import { ProfileType, PhotosType } from '../types/types'
import { InferActionsTypes, BaseThunkType } from './redux-store'
import { stopSubmit, FormAction } from 'redux-form'

const initialState = {
  profile: null as ProfileType | null,
  status: '',
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_PROFILE': {
      return { ...state, profile: action.profile }
    }
    case 'SET_STATUS': {
      return { ...state, status: action.status }
    }
    case 'SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
    }

    default:
      return state
  }
}

export const actions = {
  setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),

  setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),

  savePhotoSuccess: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(response))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  if (response.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.resultCode === 0) {
    // @ts-ignore
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
    return Promise.reject(response.messages[0])
  }
}

export default profileReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
