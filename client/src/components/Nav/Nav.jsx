import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {

  const { user } = useSelector(state => state.usersReducer)

  return (
    <nav className="uk-navbar-container">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li> <Link to='/'>Домой</Link> </li>
        </ul>

        {(user.name) ?
          <ul className="uk-navbar-nav">
            <li> <Link to='/form'>Создать запись</Link> </li>
            <li> <Link to='/contactslist'>Список показаний</Link> </li>
            <li> <Link to='/logout'>Выход</Link> </li>
          </ul>
          :
          <ul className="uk-navbar-nav">
            <li> <Link to='/registration'>Регистрация</Link> </li>
            <li> <Link to='/login'>Логин</Link> </li>
          </ul>
        }
      </div>
    </nav>
  );
}

export default Nav;
