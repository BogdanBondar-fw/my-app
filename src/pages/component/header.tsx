import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../img/logo.svg";
import IconMenu from "../../img/icon_menu.svg";
import RightsideMenu from "./rightside-menu";

const Header = () => {
  const [rightsideMenuActive, setRightsideMenuActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header__inner">
              <nav className={`menu ${menuActive ? "menu__active" : ""}`}>
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <Link
                      className={`menu__list-link ${location.pathname === "/about" ? "menu__list-link--active" : ""}`}
                      to="/about"
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                  </li>
                  <li className="menu__list-item">
                    <Link
                      className={`menu__list-link ${location.pathname === "/gallery" ? "menu__list-link--active" : ""}`}
                      to="/gallery"
                      onClick={handleLinkClick}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link className="logo" to="/main">
                <img src={Logo} alt="logo" />
              </Link>
              <nav className={`menu ${menuActive ? "menu__active" : ""}`}>
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <Link
                      className={`menu__list-link ${location.pathname === "/blog" ? "menu__list-link--active" : ""}`}
                      to="/blog"
                      onClick={handleLinkClick}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu__list-item">
                    <Link
                      className={`menu__list-link ${location.pathname === "/contact" ? "menu__list-link--active" : ""}`}
                      to="/contact"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <button className="header__btn-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <button className="header__btn" onClick={() => setRightsideMenuActive(!rightsideMenuActive)}>
                <img src={IconMenu} alt="icon menu" />
              </button>
              <RightsideMenu active={rightsideMenuActive} setActive={setRightsideMenuActive} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
