import React from 'react';
import './app.css';
// import '';

const MainPage = () => {
  return (
    <div>
      <img
        src={require('../UI/logo.png')}
        alt="company Logo"
        className="logoCompany"
      />
      <nav className="navBar">
        <div className="navRect">
          <a className="nav-prog" aria-current="page" href="/">
            Programs
          </a>

          <a className="nav-live" href="/">
            Live Projects
          </a>

          <a className="nav-com" href="/">
            Community
          </a>

          <a className="nav-jobs" href="/">
            Jobs
          </a>

          <a className="nav-about" href="/">
            About
          </a>
        </div>
      </nav>
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
