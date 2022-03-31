import React from 'react';
import { useSelector } from 'react-redux'


function Home() {

  const { user } = useSelector(state => state.usersReducer)

  return (
    <div className="uk-child-width-1-3@s" >
      <div className="uk-animation-toggle" tabIndex="0">
        <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up uk-transform-origin-bottom-right">
          <p className="uk-text-center">{(user.name) ? `Приветик, ${user.name}!` : 'Просьба авторизоваться!'}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
