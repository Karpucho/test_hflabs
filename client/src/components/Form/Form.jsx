import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actionCreators/contactsAC';

function Form() {

  const dispatch = useDispatch();
  const inputContact = useRef();

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
        window.alert('Показания добавлены!')
      })
  }

  return (
    <>
    <h4>Поле для ввода новых показаний: </h4>

    <form onSubmit={getTemp}>
      <input className="uk-input uk-form-width-medium" ref={inputContact} placeholder='Новая запись' autoFocus={true} />
      <button className="uk-button uk-button-default" type='submit'>Добавить запись</button>
    </form>
    </>
  );
}

export default Form;
