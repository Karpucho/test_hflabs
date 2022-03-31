import { AUTH_USER } from '../actionTypes/usersAt'

const initialState = { user: {} }

export function usersReducer(state = initialState, action) {
  switch (action.type) {

    case AUTH_USER:
      return { ...state, user: action.payload }

    default:
      return state
  }
}
