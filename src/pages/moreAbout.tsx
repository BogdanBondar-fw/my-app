import { Link } from "react-router-dom";

const MoreAboutUs = () => {
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
                <Link className="breadcrumbs__link" to="/moreAbout">
                  About Us
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/more-about-us">
                  More About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="more-about">
            <h2 className="more-about__title">More About Us</h2>
            <div className="more-about__section">
              <div className="more-about__content">
                <h3 className="more-about__subtitle">Our Story</h3>
                <p className="more-about__description">
                  Our story began in a small workshop where we crafted each piece of furniture with passion and
                  dedication. Over the years, our commitment to quality and innovation has helped us grow into the
                  leading furniture brand we are today.
                </p>
              </div>
            </div>
            <div className="more-about__section">
              <div className="more-about__content">
                <h3 className="more-about__subtitle">Our Mission</h3>
                <p className="more-about__description">
                  Our mission is to inspire and enrich people's lives through beautiful and functional design. We strive
                  to create furniture that not only looks great but also enhances the way people live, work, and play.
                </p>
              </div>
            </div>
            <div className="more-about__section">
              <div className="more-about__content">
                <h3 className="more-about__subtitle">Our Values</h3>
                <p className="more-about__description">
                  At our core, we value craftsmanship, sustainability, and customer satisfaction. We believe in
                  preserving traditional techniques while embracing modern technologies to create timeless and
                  eco-friendly furniture pieces.
                </p>
              </div>
            </div>
            <Link className="more-about__link-button" to="/about">
              Back to About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};
export default MoreAboutUs;
