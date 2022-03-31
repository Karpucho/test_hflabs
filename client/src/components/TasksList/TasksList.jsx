import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initTasks } from '../../redux/actionCreators/tasksAC';
import Task from '../Task/Task';

function TasksList() {

  const dispatch = useDispatch()
  const inputEl = useRef(null);
  const { tasks } = useSelector(state => state.tasksReducer)

  useEffect(() => {
    fetch('http://localhost:4000/taskslist', {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => dispatch(initTasks(data)))
      .catch(err => console.log(err.message))
  }, [dispatch])

  return (
    // <div>
    //   <input ref={inputEl} />

    //   {tasks.length > 0 ? tasks.map((task) => <Task key={task.id} task={task} inputEl={inputEl} />) : 'Нет задач'}
    // </div>
    <div>
    <input ref={inputEl} />
    <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
      {tasks.length > 0 ? tasks.map((task) => <Task key={task.id} task={task} inputEl={inputEl} />) : 'Нет задач'}
    </div>
    </div>
  );
}

export default TasksList;
