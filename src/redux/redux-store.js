import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import chatsReducer from "./chat-reducer";
import ladCatalogReducer from "./ladcatalog-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import rootReducer from "./reducers";

let reducers = combineReducers({
  chatsPage: rootReducer,
  ladCatalogPage: ladCatalogReducer,
  profilePage: profileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
