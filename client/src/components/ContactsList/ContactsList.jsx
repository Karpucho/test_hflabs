import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initContacts } from '../../redux/actionCreators/contactsAC';
import Contact from '../Contact/Contact';
import { addContact } from '../../redux/actionCreators/contactsAC';


function ContactsList() {

  const dispatch = useDispatch()
  const inputEl = useRef(null);
  const inputContact = useRef();

  const { contacts } = useSelector(state => state.contactsReducer)

// вывести все записи
  useEffect(() => {
    fetch('http://localhost:4000/contactslist', {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => dispatch(initContacts(data)))
      .catch(err => console.log(err.message))
  },)

  // добавить запись
  function getTemp(event) {
    event.preventDefault()

    let text = {
      text: inputContact.current.value,
    }
    fetch('http://localhost:4000/form',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(text),
      })
      .then(res => res.json())
      .then(data => {
        dispatch(addContact(data))
      })
  }

  return (
    <div>
      <h4>Поле для ввода новых показаний: </h4>
      <form onSubmit={getTemp}>
        <input className="uk-input uk-form-width-medium" ref={inputContact} placeholder='Новая запись'/>
        <button className="uk-button uk-button-default" type='submit'>Добавить запись</button>
      </form>

      <h4>Поле для ввода редактируемых показаний: </h4>
      <input className="uk-input uk-form-width-large" ref={inputEl} placeholder='Редактируемые показания температуры' autoFocus={true}/>
      
      <div class="uk-child-width-1-3@m uk-grid-small uk-flex-wrap">
        {contacts.length > 0 ? contacts.map((contact) => <Contact key={contact.id} contact={contact} inputEl={inputEl} />) : 'Нет контактов'}
      </div>
    </div>
  );
}

export default ContactsList;
