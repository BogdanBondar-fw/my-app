import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
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
                <Link className="breadcrumbs__link" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="faq">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <div className="faq__item" onClick={() => toggleAccordion(1)}>
              <h3 className="faq__question">Question 1: What payment methods do you accept?</h3>
              {activeIndex === 1 && <p className="faq__answer">Answer: We accept all major credit cards and PayPal.</p>}
            </div>
            <div className="faq__item" onClick={() => toggleAccordion(2)}>
              <h3 className="faq__question">Question 2: How long does delivery take?</h3>
              {activeIndex === 2 && (
                <p className="faq__answer">
                  Answer: Delivery times vary depending on your location. Standard delivery usually takes 5-7 business
                  days.
                </p>
              )}
            </div>
            <div className="faq__item" onClick={() => toggleAccordion(3)}>
              <h3 className="faq__question">Question 3: Can I return my order if I'm not satisfied?</h3>
              {activeIndex === 3 && (
                <p className="faq__answer">
                  Answer: Yes, we have a 30-day return policy. Please refer to our Returns & Refunds page for more
                  information.
                </p>
              )}
            </div>
            <div className="faq__item" onClick={() => toggleAccordion(4)}>
              <h3 className="faq__question">Question 4: How can I track the status of my order?</h3>
              {activeIndex === 4 && (
                <p className="faq__answer">
                  Answer: You can track the status of your order in your account on our website. We will also send you
                  an email notification with information about the status of your order.
                </p>
              )}
            </div>
            <div className="faq__item" onClick={() => toggleAccordion(5)}>
              <h3 className="faq__question">Question 5: Do you offer international shipping?</h3>
              {activeIndex === 5 && (
                <p className="faq__answer">
                  Answer: Yes, we provide shipping to many countries worldwide. Please contact our customer support to
                  inquire about available shipping options and rates.
                </p>
              )}
            </div>
            <div className="faq__item" onClick={() => toggleAccordion(6)}>
              <h3 className="faq__question">Question 6: What should I do if I receive a damaged item?</h3>
              {activeIndex === 6 && (
                <p className="faq__answer">
                  Answer: If you receive a damaged item, please contact our customer support team immediately. We will
                  assist you in resolving the issue and arranging for a replacement or refund.
                </p>
              )}
            </div>
            <div className="faq__item" onClick={() => toggleAccordion(7)}>
              <h3 className="faq__question">Question 7: Can I modify or cancel my order after it has been placed?</h3>
              {activeIndex === 7 && (
                <p className="faq__answer">
                  Answer: We strive to process orders quickly, but if you need to modify or cancel your order, please
                  contact us as soon as possible. We will do our best to accommodate your request, but it may depend on
                  the status of your order and our processing capabilities at the time.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
