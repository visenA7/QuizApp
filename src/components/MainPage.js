import React from 'react';
import './app.css';
// import '';

const MainPage = () => {
  return (
    <div>
      <div className="fullNav">
        <div className="container flex">
          <img
            src={require('../UI/logo.png')}
            alt="company Logo"
            className="logoCompany"
          />
          <nav className="navBar">
            <ul className="navRect">
              <li>
                <a href="/">Programs</a>
              </li>
              <li>
                <a href="/">Live Projects</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">About</a>{' '}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <img
        alt="left dot"
        src={require('../UI/dots_horizontal.png')}
        className="left-dot"
      />
      <img
        alt="right dot"
        src={require('../UI/dots_verticle.png')}
        className="right-dot"
      />
    </div>
  );
};
export default MainPage;
