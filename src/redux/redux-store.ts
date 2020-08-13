import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import chatReducer from "./chat-reducer"
import ladCatalogReducer from "./ladcatalog-reducer"
import profileReducer from "./profile-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer"
import chatReducers from "./reducers"

const rootReducer = combineReducers({
  chatsPage: chatReducer,
  ladCatalogPage: ladCatalogReducer,
  profilePage: profileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
