import { resultCodeEnum } from "./../api/api"
import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "SET_USER_DATA"

export type InitialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

const initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}
type setAuthUserDataPayloadType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}
type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: setAuthUserDataPayloadType
}
export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
})

export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authAPI.me()
  if (response.resultCode === 0) {
    let { id, login, email } = response.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (
  dispatch: any
) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.resultCode === resultCodeEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    const message = response.messages.length > 0 ? response.messages[0] : " Incorrect "
    dispatch(stopSubmit("main_login", { _error: message }))
  }
}

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === resultCodeEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
