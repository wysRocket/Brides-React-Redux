import { getAuthUserData } from './auth-reducer'
import { InferActionsTypes } from './redux-store'

const initialState = {
  initialized: false,
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SUCCESSFULY_INITIALIZED': {
      return { ...state, initialized: true }
    }

    default:
      return state
  }
}

export const actions = {
  successfulyInitialized: () => ({ type: 'SUCCESSFULY_INITIALIZED' } as const),
}

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData())
  Promise.all([promise]).then(() => {
    dispatch(actions.successfulyInitialized())
  })
}

export default appReducer
