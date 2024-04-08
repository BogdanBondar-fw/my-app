import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../img/slider-img-1.png";
import Collection1 from "../img/collection1.jpeg";
import Collection2 from "../img/collection2.jpeg";
import Collection3 from "../img/collection3.jpeg";
import Collection4 from "../img/collection4.jpeg";
import Collection5 from "../img/collection5.jpeg";

import "../css/style.css";

const Main: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="wrapper">
      <main>
        <section className="top">
          <div className="top__inner">
            <Slider {...settings}>
              <div className="top__slider-item">
                <img className="top__slider-img" src={SliderImg1} alt="img" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection 1</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth
                    actually affogato. Aesthetic lyft ethical drinking vinegar
                    austint
                  </p>
                </div>
              </div>
              <div className="top__slider-item">
                <img className="top__slider-img" src={SliderImg1} alt="img" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection 2</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth
                    actually affogato. Aesthetic lyft ethical drinking vinegar
                    austint
                  </p>
                </div>
              </div>
              <div className="top__slider-item">
                <img className="top__slider-img" src={SliderImg1} alt="img" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection 3</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth
                    actually affogato. Aesthetic lyft ethical drinking vinegar
                    austint
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className="new-collection">
          <div className="container-fluid">
            <h3 className="new-collection-title">Furniture new collection</h3>
            <p className="new-collection-text">
              Deep v you probably haven't heard of them banh mi synth actually
              affogato. Aesthetic lyft ethical drinking vinegar austint
            </p>
            <div className="collection">
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection1} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">
                    Truffaut literally trust
                  </h6>
                  <p className="collection__info-text">
                    Living room furntiture | Chair
                  </p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection2} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">
                    Truffaut literally trust
                  </h6>
                  <p className="collection__info-text">
                    Living room furntiture | Chair
                  </p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection3} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">
                    Truffaut literally trust
                  </h6>
                  <p className="collection__info-text">
                    Living room furntiture | Chair
                  </p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection4} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">
                    Truffaut literally trust
                  </h6>
                  <p className="collection__info-text">
                    Living room furntiture | Chair
                  </p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection5} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">
                    Truffaut literally trust
                  </h6>
                  <p className="collection__info-text">
                    Living room furntiture | Chair
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
