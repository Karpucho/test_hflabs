import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
  const navigate = useNavigate();

  useEffect(()=> {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
    })
    .then( res => res.json())
    .then(data => window.alert(data.message))
    .catch(console.error())
    
    navigate('/')
    window.location.reload();
  })
  

  return (
    <div>
      {/* 1 */}
    </div>
  );
}

export default Logout;
