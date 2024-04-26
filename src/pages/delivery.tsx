import React from "react";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/main">
                Home
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/delivery">
                Delivery
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="delivery">
          <h2 className="delivery__title">Delivery Information</h2>
          <p className="delivery__description">
            We offer delivery services to a wide range of countries to ensure your furniture reaches you safely and on
            time. Our delivery team works diligently to provide the best service possible.
          </p>
          <h3 className="delivery__expectations-title">Here's what you can expect:</h3>
          <ul className="delivery__expectations">
            <li className="delivery__expectation">Our delivery team will keep you updated every step of the way.</li>
            <li className="delivery__expectation">
              You will receive tracking information as soon as your order is processed.
            </li>
            <li className="delivery__expectation">Fast and efficient delivery to your doorstep.</li>
          </ul>
          <div className="delivery__details">
            <h3 className="delivery__details-title">Delivery Details:</h3>
            <ul className="delivery__details-list">
              <li className="delivery__details-detail">Free standard delivery on all orders over $10000.</li>
              <li className="delivery__details-detail">Express delivery options available for an additional fee.</li>
              <li className="delivery__details-detail">Tracking information provided for all shipments.</li>
              <li className="delivery__details-detail">Delivery times vary depending on your location.</li>
              <li className="delivery__details-detail">
                For any inquiries regarding your delivery, please contact our customer support team.
              </li>
            </ul>
          </div>
          <table className="delivery__table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Standard Delivery</th>
                <th>Express Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>United States</td>
                <td>$200</td>
                <td>$400</td>
              </tr>
              <tr>
                <td>United Kingdom</td>
                <td>$250</td>
                <td>$450</td>
              </tr>
              <tr>
                <td>Canada</td>
                <td>$250</td>
                <td>$450</td>
              </tr>
              <tr>
                <td>Australia</td>
                <td>$300</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>Germany</td>
                <td>$250</td>
                <td>$450</td>
              </tr>
            </tbody>
          </table>
          <p className="delivery__note">
            Please note that delivery times may be longer during busy periods or due to unforeseen circumstances such as
            customs delays. We appreciate your patience and understanding.
          </p>
          <Link to="/contact" className="delivery__link-button">
            Place Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default Delivery;
