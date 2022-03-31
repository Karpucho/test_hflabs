import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authUser } from '../../redux/actionCreators/usersAc';
import Nav from '../Nav/Nav';
import Registration from '../Registration/Registration';
import Logout from '../Logout/Logout';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Form from '../Form/Form';
import ContactsList from '../ContactsList/ContactsList';

function App() {

  const dispatch = useDispatch();

  // проверяем авторизацию юзера и получаем доступ к юзеру в любом компоненте
  useEffect(() => {
    fetch('http://localhost:4000/auth', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => dispatch(authUser(data)))
      .catch(err => console.log(err.message))

  }, [dispatch])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contactslist" element={<ContactsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
