import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../redux/actionCreators/tasksAC';

function Task({ task, inputEl }) {

  const dispatch = useDispatch()

  const fetchDeleteTask = () => {
    fetch(`http://localhost:4000/taskslist/${task.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => dispatch(deleteTask(data)))
  }

  const fetchUpdateTask = (event) => {
    event.preventDefault()

    const body = {
      text: inputEl.current.value,
      id: task.id,
    }

    fetch(`http://localhost:4000/taskslist/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => dispatch(editTask(data)))
  };

  return (
    // <div className="uk-card uk-card-default uk-width-1-2@m">
    //     <div className="uk-card-header">
    //       <div className="uk-grid-small uk-flex-middle" uk-grid>
    //         <div className="uk-width-expand">
    //           <h4 className="uk-card-title uk-margin-remove-bottom">Задача:</h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="uk-card-body">
    //       <p>{task.text}</p>
    //     </div>
    //     <div className="uk-card-footer">
    //     <p uk-margin>
    //         <button className="uk-button uk-button-default" onClick={fetchDeleteTask}>Удалить</button>
    //         <button className="uk-button uk-button-default" onClick={fetchUpdateTask}>Изменить</button>
    //     </p>

    //     </div>
    // </div>
    <div>
      <div className="uk-card uk-card-hover uk-card-body">
        <h3 className="uk-card-title">Задача:</h3>
        <p>{task.text}</p>
        <p uk-margin>
          <button className="uk-button uk-button-default" onClick={fetchDeleteTask}>Удалить</button>
          <button className="uk-button uk-button-default" onClick={fetchUpdateTask}>Изменить</button>
        </p>
      </div>

    </div>
  );
}

export default Task;
