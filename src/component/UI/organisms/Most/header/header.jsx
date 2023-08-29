import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">RUNNINGHI</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </label>
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#login">LOGIN</a></li>
      </ul>
    </header>
  );
}

export default Header;
