import { getAuthUserData } from "./auth-reducer";

const SUCCESSFULY_INITIALIZED = "SUCCESSFULY_INITIALIZED";

export type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SUCCESSFULY_INITIALIZED: {
      return { ...state, initialized: true };
    }

    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof SUCCESSFULY_INITIALIZED;
};

export const successfulyInitialized = () => ({ type: SUCCESSFULY_INITIALIZED });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(successfulyInitialized());
  });
};

export default appReducer;
