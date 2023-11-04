import React, { useState } from "react";
import "../../../../../src/assets/scss/ui/organisms/header.scss";

function Header() {
  const [active, setActive] = useState("header_menu");
  const [toggleIcon, setToggleIcon] = useState("header_toggler");

  const headerToggle = () => {
    active === "header_menu"
      ? setActive("header_menu header_active")
      : setActive("header_menu");

    // 토글 애니메이션 구현 ToggleIcon
    toggleIcon === "header_toggler"
      ? setToggleIcon("header_toggler toggle")
      : setToggleIcon("header_toggler");
  };

  return (
    <header className="header">
      <i className="brand">RUNNINGHI</i>

      <ul className={active}>
        <li className="header_item">
          <a href="/" className="header_link">
            Home
          </a>
        </li>

        <li className="header_item">
          <a href="#" className="header_link">
            About
          </a>
        </li>

        <li className="header_item">
          <a href="/login" className="header_link">
            Login
          </a>
        </li>
      </ul>

      <div onClick={headerToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}

export default Header;
