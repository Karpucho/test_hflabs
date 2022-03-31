import { combineReducers } from 'redux'
import { contactsReducer } from './contactsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
  contactsReducer,
  usersReducer
})
