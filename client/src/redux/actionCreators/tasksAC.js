import { ADD_TASK, INIT_TASKS, DELETE_TASK, EDIT_TASK_NAME } from "../actionTypes/tasksAt"

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload
  }
}

export const initTasks = (payload) => {
  return {
    type: INIT_TASKS,
    payload
  }
}

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload
  }
}

export const editTask = (payload) => {
  return {
    type: EDIT_TASK_NAME,
    payload
  }
}
