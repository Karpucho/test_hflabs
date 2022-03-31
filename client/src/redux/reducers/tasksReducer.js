import { ADD_TASK, INIT_TASKS, DELETE_TASK, EDIT_TASK_NAME } from '../actionTypes/tasksAt'

const initialState = { tasks: [] }

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    
    case ADD_TASK:
      return {...state, tasks: [...state.tasks, {id: action.payload.id, text: action.payload.text}]};
    case INIT_TASKS:
      return { ...state, tasks: action.payload.sort((a, b) => a.id - b.id) }
    case DELETE_TASK:
      return {...state, tasks: [...state.tasks.filter((task) => task.id !== +action.payload)]};
    case EDIT_TASK_NAME:
      return {...state, 
      tasks: [...state.tasks.map((task) => task.id === action.payload.id ? {...task, text: action.payload.text} : task)]};

    default: return state
  }
}
