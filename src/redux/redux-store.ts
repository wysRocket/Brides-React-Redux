import { combineReducers, createStore, compose, applyMiddleware, Action } from 'redux'
import chatReducer from './chat-reducer'
import usersReducer from './users-reducer'
import profileReducer from './profile-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer'
import chatReducers from './reducers'

const rootReducer = combineReducers({
  chatsPage: chatReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
