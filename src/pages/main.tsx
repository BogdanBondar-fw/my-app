import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MixComponent from "./component/mixitup";

import SliderImg1 from "../img/slider-img-1.png";
import Collection1 from "../img/collection1.jpeg";
import Collection2 from "../img/collection2.jpeg";
import Collection3 from "../img/collection3.jpeg";
import Collection4 from "../img/collection4.jpeg";
import Collection5 from "../img/collection5.jpeg";
import Path1 from "../img/path1.svg";
import Path2 from "../img/path2.svg";
import Path3 from "../img/path3.svg";
import ImgLink1 from "../img/img-link1.jpeg";
import ImgLink2 from "../img/img-link2.jpeg";

import "../css/style.css";

const Main: React.FC = () => {
  const settingsMein = {
    dots: true,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div className="wrapper">
      <main>
        <section className="top">
          <div className="top__inner">
            <Slider {...settingsMein}>
              <div className="top__slider-item">
                <img className="top__slider-img" src={SliderImg1} alt="img" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection1</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical
                    drinking vinegar austint
                  </p>
                </div>
              </div>
              <div className="top__slider-item">
                <img className="top__slider-img" src={SliderImg1} alt="img" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection2</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical
                    drinking vinegar austint
                  </p>
                </div>
              </div>
              <div className="top__slider-item">
                <img className="top__slider-img" src={SliderImg1} alt="img" />
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection3</h2>
                  <p className="top__slider-text">
                    Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical
                    drinking vinegar austint
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
              Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking
              vinegar austint
            </p>
            <div className="collection">
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection1} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">Truffaut literally trust</h6>
                  <p className="collection__info-text">Living room furntiture | Chair</p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection2} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">Truffaut literally trust</h6>
                  <p className="collection__info-text">Living room furntiture | Chair</p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection3} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">Truffaut literally trust</h6>
                  <p className="collection__info-text">Living room furntiture | Chair</p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection4} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">Truffaut literally trust</h6>
                  <p className="collection__info-text">Living room furntiture | Chair</p>
                </div>
              </Link>
              <Link className="collection__item" to="/gallery">
                <img className="collection__img" src={Collection5} alt="img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">Truffaut literally trust</h6>
                  <p className="collection__info-text">Living room furntiture | Chair</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="decor">
          <div className="container">
            <h2 className="decor__title">Aesthetic ethical drinking</h2>
            <p className="decor__text">
              Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one
              drinking vinegar austint
            </p>
          </div>
        </section>
        <section className="works-path">
          <div className="container">
            <h3 className="works-path__title"> How it works</h3>
            <div className="works-path__items">
              <div className="works-path__items-box">
                <div className="works-path__item works-path__item--consultation">
                  <img className="works-path__item-img" src={Path1} alt="img"></img>
                  <h6 className="works-path__item-title">Designer Consultation</h6>
                  <p className="works-path__item-text">
                    Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring
                    book.
                  </p>
                </div>
                <div className="works-path__item works-path__item--production">
                  <img className="works-path__item-img" src={Path2} alt="img"></img>
                  <h6 className="works-path__item-title">Production</h6>
                  <p className="works-path__item-text">Everyday carry actually neutra authentic kogi shabby chic</p>
                </div>
              </div>
              <div className="works-path__item works-path__item--measurements">
                <img className="works-path__item-img" src={Path3} alt="img"></img>
                <h6 className="works-path__item-title">Measurements</h6>
                <p className="works-path__item-text">
                  Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                </p>
              </div>
            </div>
          </div>
        </section>
        <MixComponent />
        <section className="main-blog">
          <div className="container">
            <h3 className="main-blog__title">More inspiration ideas in our blog</h3>
            <div className="main-blog__items">
              <div className="main-blog__item">
                <Link className="main-blog__img-link" to="/gallery">
                  <img className="main-blog__img" src={ImgLink1} alt="img" />
                </Link>
                <div className="main-blog__links">
                  <span className="main-blog__date">March 12, 2020</span> |
                  <Link className="main-blog__autor" to="/blog">
                    by Ann Summers
                  </Link>
                  |
                  <Link className="main-blog__theme" to="/">
                    Inrerior
                  </Link>
                </div>
                <Link className="main-blog__item-title" to="/">
                  <h4 className="main-blog__item-title">
                    Listicle actually selvage activated charcoal for the drinking vinegar
                  </h4>
                </Link>
              </div>
              <div className="main-blog__item">
                <Link className="main-blog__img-link" to="/gallery">
                  <img className="main-blog__img" src={ImgLink2} alt="img" />
                </Link>
                <div className="main-blog__links">
                  <span className="main-blog__date">September 28,2020</span> |
                  <Link className="main-blog__autor" to="/blog">
                    by Finnagan Morningstar
                  </Link>
                  |
                  <Link className="main-blog__theme" to="/">
                    Dining room interior
                  </Link>
                </div>
                <Link className="main-blog__item-title" to="/">
                  <h4 className="main-blog__item-title">Red selfies edison bulb four dollar toast humblebrag</h4>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
