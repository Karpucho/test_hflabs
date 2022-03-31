import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUser } from '../../redux/actionCreators/usersAc';

function Registration() {

  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // функция регистрации
  function register(event) {
    event.preventDefault();

    const user = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    }
    fetch('http://localhost:4000/registration',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => dispatch(authUser(data)))
    .catch(console.error())

    navigate('/')
  }

  return (
    <form>
        <input className="uk-input uk-form-width-medium" ref={inputName} placeholder='name' autoFocus={true}/><br/>
        <input className="uk-input uk-form-width-medium" ref={inputEmail} placeholder='email'/><br/>
        <input className="uk-input uk-form-width-medium" ref={inputPassword} placeholder='password'/><br/>
        <button className="uk-button uk-button-default" onClick={register}>Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
