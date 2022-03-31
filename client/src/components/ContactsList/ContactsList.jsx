import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initContacts } from '../../redux/actionCreators/contactsAC';
import Contact from '../Contact/Contact';

function ContactsList() {

  const dispatch = useDispatch()
  const inputEl = useRef(null);
  const { contacts } = useSelector(state => state.contactsReducer)

  useEffect(() => {
    fetch('http://localhost:4000/contactslist', {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => dispatch(initContacts(data)))
      .catch(err => console.log(err.message))
  }, [dispatch])

  return (
    <div>
      <h4>Поле для ввода редактируемых показаний: </h4>
      <input className="uk-input uk-form-width-large" ref={inputEl} placeholder='Редактируемые показания температуры' autoFocus={true}/>
      <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
        {contacts.length > 0 ? contacts.map((contact) => <Contact key={contact.id} contact={contact} inputEl={inputEl} />) : 'Нет контактов'}
      </div>
    </div>
  );
}

export default ContactsList;
