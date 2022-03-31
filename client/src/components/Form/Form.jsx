import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../redux/actionCreators/contactsAC';

function Form() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputContact = useRef();


  function getName(event) {
    event.preventDefault()

    const text = {
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
      .then(data => dispatch(addContact(data)))
    navigate('/contactslist')
  }

  return (
    <form onSubmit={getName}>
      <input className="uk-input uk-form-width-medium" ref={inputContact} placeholder='Контакт' autoFocus={true}/>
      <button className="uk-button uk-button-default" type='submit'>Добавить контакт</button>
    </form>
  );
}

export default Form;
