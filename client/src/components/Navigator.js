import React from 'react';
import Auth from './Auth.js';

const auth = new Auth();

const Navigator = props => {
  const login = () => {
    auth.handleAuthentication(auth.login());
  };

  const logout = () => {
    auth.logout();
  };
  console.log(auth.getIdToken());

  return (
    <nav className="purple">
      <div className="nav-wrapper">
        <div className="container">
          <a className="brand-logo">Notes</a>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li>
              <a onClick={login}>Login</a>
            </li>
            <li>
              <a onClick={logout}>Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
