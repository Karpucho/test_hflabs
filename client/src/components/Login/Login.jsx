import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authUser } from '../../redux/actionCreators/usersAc';


function Login() {

  const dispatch = useDispatch()
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

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
      <input ref={inputEmail} placeholder='email'/>
      <input ref={inputPassword} placeholder='password'/>
      <button onClick={login}>Логин</button>
    </form>
  );
}

export default Login;
