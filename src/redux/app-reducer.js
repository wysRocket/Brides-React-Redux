import {getAuthUserData} from './../redux/auth-reducer';

const SUCCESSFULY_INITIALIZED = 'SUCCESSFULY_INITIALIZED';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SUCCESSFULY_INITIALIZED: {
      return {...state, initialized: true}
    }
    
    default: return state;
}}

export const successfulyInitialized = () => ({type: SUCCESSFULY_INITIALIZED});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then ( () => {
  dispatch(successfulyInitialized())
})
}

export default appReducer; 