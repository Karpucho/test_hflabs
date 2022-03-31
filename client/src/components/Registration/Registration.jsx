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
        <input ref={inputName} placeholder='name'/>
        <input ref={inputEmail} placeholder='email'/>
        <input ref={inputPassword} placeholder='password'/>
        <button onClick={register}>Рега</button>
    </form>
  );
}

export default Registration;
