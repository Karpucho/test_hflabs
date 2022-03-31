import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../redux/actionCreators/tasksAC';

function Form(props) {

const dispatch = useDispatch();
const navigate = useNavigate();
const inputTask = useRef();


  function getName(event) {
    event.preventDefault()

    const text = {
      text: inputTask.current.value,
    }
    fetch('http://localhost:4000/form',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(text),
    })
    .then(res => res.json())
    .then(data => dispatch(addTask(data)))
    navigate('/taskslist')
  }

  return (
    <form onSubmit={getName}>
      <input ref={inputTask} placeholder='Название задачи' />
      <button type='submit'>Подтвердить</button>
    </form>
  );
}

export default Form;
