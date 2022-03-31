import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/actionCreators/contactsAC';

function Contact({ contact, inputEl }) {

  const dispatch = useDispatch()

  const fetchDeleteContact = () => {
    fetch(`http://localhost:4000/contactslist/${contact.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => dispatch(deleteContact(data)))
  }

  const fetchUpdateContact = (event) => {
    event.preventDefault()

    const body = {
      text: inputEl.current.value,
      id: contact.id,
    }

    fetch(`http://localhost:4000/contactslist/${contact.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => dispatch(editContact(data)))
  };

  return (
    <div>
      <div className="uk-card uk-card-hover uk-card-body">
        <h3 className="uk-card-title">Контакт:</h3>
        <p>{contact.text}</p>
        <p uk-margin>
          <button className="uk-button uk-button-default" onClick={fetchDeleteContact}>Удалить</button>
          <button className="uk-button uk-button-default" onClick={fetchUpdateContact}>Изменить</button>
        </p>
      </div>

    </div>
  );
}

export default Contact;
