import React from 'react';
import ReactDOM from 'react-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
