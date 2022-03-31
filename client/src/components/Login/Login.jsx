import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUser } from '../../redux/actionCreators/usersAc';


function Login() {

  const dispatch = useDispatch()
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  // функция логина
  function login(event) {
    event.preventDefault();
    const user = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    }
    fetch('http://localhost:4000/login',
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
      <input className="uk-input uk-form-width-medium" ref={inputEmail} placeholder='email' autoFocus={true}/><br/>
      <input className="uk-input uk-form-width-medium" ref={inputPassword} placeholder='password'/><br/>
      <button className="uk-button uk-button-default" onClick={login}>Логин</button>
    </form>
  );
}

export default Login;
