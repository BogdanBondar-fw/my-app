import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="wrapper">
        <footer className="footer">
          <div className="footer__content">
            <div className="container">
              <div className="footer__inner">
                <div className="footer__info">
                  <h6 className="footer__info-title">Contact Us</h6>
                  <p className="footer__info-text">
                    Keffiyeh poutine etsy, paleo cray put a bird on it
                    microdosing schlitz you probably occupy
                  </p>
                  <Link
                    className="info-email"
                    to="mailto:ouremailaddress@email.com"
                  >
                    ouremailaddress@email.com
                  </Link>
                  <form className="footer__form">
                    <input
                      className="footer__form-input"
                      type="email"
                      placeholder="Subscribe by email"
                    />
                    <button className="footer__form-btn" type="submit">
                      Send
                    </button>
                  </form>
                </div>
                <ul className="footer__social">
                  <li className="footer__social-item">
                    <Link
                      className="footer__social-link footer__social-link--facebook"
                      to="https://www.facebook.com/"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="footer__social-item">
                    <Link
                      className="footer__social-link footer__social-link--instagram"
                      to="https://www.instagram.com/"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="footer__social-item">
                    <Link
                      className="footer__social-link footer__social-link--pinterest"
                      to="https://www.pinterest.com/"
                    >
                      Pinterest
                    </Link>
                  </li>
                  <li className="footer__social-item">
                    <Link
                      className="footer__social-link footer__social-link--whatsapp"
                      to="https://web.whatsapp.com/"
                    >
                      WhatsApp
                    </Link>
                  </li>
                  <li className="footer__social-item">
                    <Link
                      className="footer__social-link footer__social-link--youtube"
                      to="https://www.youtube.com/"
                    >
                      YouTube
                    </Link>
                  </li>
                </ul>
                <nav className="footer__menu">
                  <ul className="footer__menu-list">
                    <li className="footer__menu-item">
                      <Link className="footer__menu-link" to="/delivery">
                        Delivery
                      </Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link className="footer__menu-link" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link className="footer__menu-link" to="/help">
                        Help
                      </Link>
                    </li>
                    <li className="footer__menu-item">
                      <Link className="footer__menu-link" to="/moreAbout">
                        More About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="container">
              <p>674 Gonzales Drive. Washington, PA 15301</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
