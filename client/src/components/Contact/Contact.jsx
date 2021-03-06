import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/actionCreators/contactsAC';

function Contact({ contact, inputEl }) {

  const dispatch = useDispatch()

  // удаление записи
  const fetchDeleteContact = () => {
    fetch(`http://localhost:4000/contactslist/${contact.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => dispatch(deleteContact(data)))
  }

  // редактирование записи
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
        <h4 className="uk-card-title">Запись:</h4>
          <p>ID записи: <b>{contact.id}</b></p>
          <p>Показания температуры: <b>{contact.text}</b></p>
            <p uk-margin>
              <button className="uk-button uk-button-default" onClick={fetchDeleteContact}>Удалить</button>
              <button className="uk-button uk-button-default" onClick={fetchUpdateContact}>Редактировать</button>
            </p>
      </div>
    </div>
  );
}

export default Contact;
