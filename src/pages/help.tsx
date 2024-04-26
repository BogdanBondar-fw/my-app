import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="/main">
                    Home
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="/help">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="help">
              <h2 className="help__title">Welcome to Our Help Center</h2>
              <div className="help__section">
                <h3 className="help__section-title">Frequently Asked Questions (FAQs)</h3>
                <p className="help__section-text">Explore common questions and find answers here.</p>
                <Link className="help__section-link" to="/faq">
                  Go to FAQs
                </Link>
              </div>
              <div className="help__section">
                <h3 className="help__section-title">Contact Us</h3>
                <p className="help__section-text">
                  Need further assistance? Feel free to contact us, and our support team will be happy to help you.
                </p>
                <Link className="help__section-link" to="/contact">
                  Contact Support
                </Link>
              </div>
              <div className="help__section">
                <h3 className="help__section-title">Delivery</h3>
                <p className="help__section-text">Learn more about our delivery services and shipping options.</p>
                <Link className="help__section-link" to="/delivery">
                  View Delivery Information
                </Link>
              </div>
              <div className="help__section">
                <h3 className="help__section-title">About Us</h3>
                <p className="help__section-text">
                  Discover our story, mission, and values that drive us to provide the best products and services.
                </p>
                <Link className="help__section-link" to="/about">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Help;
