import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="runninghi-header">
      <div className="logo">
        <img src="/src/atoms/Image/logo/logo.svg" alt="logo" />
        <a href=""></a>
      </div>

      <nav className="header-nav">
        <button className="navBtn homeBtn" id="home-button">
          <a href="/" className="navBtn homeBtn"></a>
          <img src="/src/atoms/Button/homeBtn/homeBtn.svg" alt="Home" />
        </button>
        <button className="navBtn aboutBtn" id="about-button">
          <a href="/about" className="navBtn aboutBtn"></a>
          <img src="/src/atoms/Button/aboutBtn/aboutBtn.svg" alt="About" />
        </button>
        <button className="navBtn loginBtn" id="login-button">
          <a href="/login" className="navBtn loginBtn"></a>
          <img src="/src/atoms/Button/loginBtn/loginBtn.svg" alt="Login" />
        </button>
      </nav>

      <nav className="hamburgur_bar">
        <ul className="hamBtn" id="ham-Btn">
          <a href="/hamburgur" className="hamBtn"></a>
          <img src="/src/atoms/Button/HamBtn/HamBtn.svg" alt="hamburgur" />
        </ul>
      </nav>

      <div className="navLine">
        <img src="/src/atoms/Image/line/navLine.svg" alt="line" />
      </div>
    </header>
  );
}

export default Header;
