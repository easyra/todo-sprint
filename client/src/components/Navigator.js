import React from 'react';

const Navigator = props => {
  return (
    <nav className="purple">
      <div className="nav-wrapper">
        <div className="container">
          <a className="brand-logo">Notes</a>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
