import { AUTH_USER } from "../actionTypes/usersAt"

export const authUser = (payload) => {
  return {
    type: AUTH_USER,
    payload
  }
}
