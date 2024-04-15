import { Link } from "react-router-dom";
import Slider from "react-slick";

import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Pinterest from "../img/pinterest.svg";
import Whatsapp from "../img/whatsapp.svg";
import YouTybe from "../img/youtube.svg";
import SliderImgCon1 from "../img/sliderimgcon1.jpeg";
import SliderImgCon2 from "../img/sliderimgcon2.jpeg";
import SliderImgCon3 from "../img/sliderimgcon3.jpeg";
import SliderImgCon4 from "../img/sliderimgcon4.jpeg";
import SliderImgCon5 from "../img/sliderimgcon5.jpeg";
import SliderImgCon6 from "../img/sliderimgcon6.jpeg";
import SliderImgCon7 from "../img/sliderimgcon7.jpeg";
import SliderImgCon8 from "../img/sliderimgcon8.jpeg";
import SliderImgCon9 from "../img/sliderimgcon9.jpeg";
import SliderImgCon10 from "../img/sliderimgcon10.jpeg";

import "../css/style.css";

const Contact = () => {
  const settingsCon = {
    dots: true,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
  };

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
                  <Link className="breadcrumbs__link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10603.947166732538!2d-122.41739587886445!3d37.800060680266064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2s725%20Green%20St%2C%20San%20Francisco%2C%20CA%2094133%2C%20USA!5e0!3m2!1sen!2sua!4v1712931875720!5m2!1sen!2sua"
              title="Google Maps: Location"
              width="100%"
              height="580"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <section className="contact">
            <div className="container">
              <h3 className="contact__title">Contact Us</h3>
              <ul className="contact__social">
                <li className="contact__social-item">
                  <Link
                    className="contact__social-link"
                    to="https://www.facebook.com/"
                  >
                    <img
                      className="contact__social-img"
                      src={Facebook}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="contact__social-item">
                  <Link
                    className="contact__social-link"
                    to="https://www.instagram.com/"
                  >
                    <img
                      className="contact__social-img"
                      src={Instagram}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="contact__social-item">
                  <Link
                    className="contact__social-link"
                    to="https://www.pinterest.com/"
                  >
                    <img
                      className="contact__social-img"
                      src={Pinterest}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="contact__social-item">
                  <Link
                    className="contact__social-link"
                    to="https://web.whatsapp.com/"
                  >
                    <img
                      className="contact__social-img"
                      src={Whatsapp}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="contact__social-item">
                  <Link
                    className="contact__social-link"
                    to="https://www.youtube.com/"
                  >
                    <img
                      className="contact__social-img"
                      src={YouTybe}
                      alt="img"
                    />
                  </Link>
                </li>
              </ul>
              <div className="contact__box">
                <p className="contact__text">
                  Vexillologist vape microdosing freegan pork belly deep v
                  direct trade cray single-origin coffee street art. Viral
                  shaman mustache master cleanse, pour-over affogato poutine
                  copper mug marfa fanny pack normcore. Lo-fi pop-up banjo
                  portland, echo park hammock
                </p>
                <Link className="contact__phone" to="tel:+14158297934">
                  (415) 829-7934
                </Link>
                <div className="contact__st">725 Green St</div>
                <div className="contact__city">
                  San Francisco, California(CA), 94133
                </div>
                <Link
                  className="info-email"
                  to="mailto:ouremailaddress@email.com"
                >
                  ouremailaddress@email.com
                </Link>
              </div>
              <form className="contact__form">
                <input
                  className="contact__form-input"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="contact__form-input"
                  placeholder="Your e-mail"
                  type="email"
                />
                <textarea
                  className="contact__form-area"
                  placeholder="Your message"
                ></textarea>
                <button className="contact__form-btn" type="submit">
                  Send
                </button>
              </form>
            </div>
          </section>
          <div className="container-fluid">
            <Slider className="contact-slider" {...settingsCon}>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon1}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon2}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon3}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon4}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon5}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon6}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon7}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon8}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon9}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon10}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon1}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon2}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon3}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon4}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon5}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon6}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon7}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon8}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon9}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon10}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon1}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon2}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon3}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon4}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon5}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon6}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon7}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon8}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon9}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>{" "}
              <div className="contact-slider__item">
                <Link className="contact-slider__link" to="/gallery">
                  <img
                    className="contact-slider__img"
                    src={SliderImgCon10}
                    alt="img"
                  />
                  <p className="contact-slider__title">
                    Truffaut literally trust
                  </p>
                </Link>
              </div>
            </Slider>
          </div>
        </main>
      </div>
    </>
  );
};
export default Contact;
