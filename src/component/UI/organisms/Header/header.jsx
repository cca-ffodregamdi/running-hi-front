import React, { useState, useEffect } from "react";
import {
  isLoggedIn as checkIsLoggedIn,
  logout,
} from "../../../pages/login/loginPage/authService";
import "../../../../../src/assets/scss/ui/organisms/header.scss";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [active, setActive] = useState("header_menu");
  const [toggleIcon, setToggleIcon] = useState("header_toggler");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(checkIsLoggedIn());
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  const headerToggle = () => {
    setActive((prevActive) =>
      prevActive === "header_menu" ? "header_menu header_active" : "header_menu"
    );
    setToggleIcon((prevToggleIcon) =>
      prevToggleIcon === "header_toggler"
        ? "header_toggler toggle"
        : "header_toggler"
    );
  };

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveMenu(null);
    }, 5000);
  };

  return (
    <header className="header">
      <a href="/" className="brand">
        RUNNINGHI
      </a>

      <ul className={active}>
        <li
          className="header_item"
          onMouseEnter={() => handleMouseEnter("About")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="header_link">
            About
          </a>
        </li>
        <li
          className="header_item"
          onMouseEnter={() => handleMouseEnter("Course")}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/mypage" className="header_link">
            Course
          </a>
          {activeMenu === "Course" && (
            <div className="submenu">
              <a className="runninghis" href="#">
                러닝하이 추천코스
              </a>
              <a className="runner" href="#">
                러너들의 추천코스
              </a>
            </div>
          )}
        </li>
        {isLoggedIn ? (
          <>
            <li
              className="header_item"
              onMouseEnter={() => handleMouseEnter("MyPage")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/mypage" className="header_link">
                MyPage
              </a>
            </li>
            <li
              className="header_item"
              onMouseEnter={() => handleMouseEnter("Logout")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/login" className="header_link" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <li
            className="header_item"
            onMouseEnter={() => handleMouseEnter("Login")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/login" className="header_link">
              Login
            </a>
          </li>
        )}
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
