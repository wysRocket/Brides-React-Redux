import { ResultCodeEnum } from './../api/api'
import { authAPI } from '../api/auth-api'
import { stopSubmit, FormAction } from 'redux-form'
import { InferActionsTypes, BaseThunkType } from './redux-store'

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA': {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (
    userId: null | number,
    login: string | null,
    email: string | null,
    isAuth: boolean
  ) => ({ type: 'SET_USER_DATA', payload: { userId, login, email, isAuth } } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const response = await authAPI.me()
  if (response.resultCode === 0) {
    const { id, login, email } = response.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (
  dispatch
) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    const message = response.messages.length > 0 ? response.messages[0] : ' Incorrect '
    dispatch(stopSubmit('main_login', { _error: message }))
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export default authReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
