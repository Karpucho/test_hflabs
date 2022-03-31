import { combineReducers } from 'redux'
import { tasksReducer } from './tasksReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
  tasksReducer,
  usersReducer
})
