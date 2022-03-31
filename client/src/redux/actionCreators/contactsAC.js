import { ADD_CONTACT, INIT_CONTACTS, DELETE_CONTACT, EDIT_CONTACT_NAME } from "../actionTypes/contactsAt"

export const addContact = (payload) => {
  return {
    type: ADD_CONTACT,
    payload
  }
}

export const initContacts = (payload) => {
  return {
    type: INIT_CONTACTS,
    payload
  }
}

export const deleteContact = (payload) => {
  return {
    type: DELETE_CONTACT,
    payload
  }
}

export const editContact = (payload) => {
  return {
    type: EDIT_CONTACT_NAME,
    payload
  }
}
