import { useState } from "react";
import "../../css/style.css";
import Logo from "../../img/logo.svg";
import IconMenu from "../../img/icon_menu.svg";
import RightsideMenu from "./rightside-menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [rightsideMenuActive, setRightsideMenuActive] = useState(false);

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header__inner">
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <Link className="menu__list-link" to="about">
                      About
                    </Link>
                  </li>
                  <li className="menu__list-item">
                    <Link className="menu__list-link" to="gallery">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link className="logo" to="main">
                <img src={Logo} alt="logo" />
              </Link>
              <nav className="menu">
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <Link className="menu__list-link" to="blog">
                      Blog
                    </Link>
                  </li>
                  <li className="menu__list-item">
                    <Link className="menu__list-link" to="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <button
                className="header__btn"
                onClick={() => setRightsideMenuActive(!rightsideMenuActive)}
              >
                <img src={IconMenu} alt="icon menu" />
              </button>
              <RightsideMenu
                active={rightsideMenuActive}
                setActive={setRightsideMenuActive}
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
