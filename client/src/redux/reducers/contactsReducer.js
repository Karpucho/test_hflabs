import { ADD_CONTACT, INIT_CONTACTS, DELETE_CONTACT, EDIT_CONTACT_NAME } from '../actionTypes/contactsAt'

const initialState = { contacts: [] }

export function contactsReducer(state = initialState, action) {
  switch (action.type) {
    
    case ADD_CONTACT:
      return {...state, contacts: [...state.contacts, {id: action.payload.id, text: action.payload.text}]};
    case INIT_CONTACTS:
      return { ...state, contacts: action.payload.sort((a, b) => a.id - b.id) }
    case DELETE_CONTACT:
      return {...state, contacts: [...state.contacts.filter((contact) => contact.id !== +action.payload)]};
    case EDIT_CONTACT_NAME:
      return {...state, 
      contacts: [...state.contacts.map((contact) => contact.id === action.payload.id ? {...contact, text: action.payload.text} : contact)]};

    default: return state
  }
}
