import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import InspirationChair from "../img/inspiration-chair.png";
import PartnersImg1 from "../img/partners-img1.svg";
import PartnersImg2 from "../img/partners-img2.svg";
import Collection1 from "../img/collection1.jpeg";
import Collection2 from "../img/collection2.jpeg";
import Collection3 from "../img/collection3.jpeg";
import Collection4 from "../img/collection4.jpeg";
import Collection5 from "../img/collection5.jpeg";
import PlayBtn from "../img/play-button.svg";

import "../css/style.css";

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <main className="main">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/main">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <section className="about">
          <div className="about__prev">
            <h2 className="about__prev-title">About Us</h2>
          </div>
          <div className="about__content">
            <div className="container">
              <h3 className="about__title">
                Balance in the simple through an informed marriage of design, functional and craft
              </h3>
              <div className="about__text">
                <p>
                  Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee street
                  art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny pack
                  normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave literally post-ironic ramps subway
                  tile kitsch. Shaman tumblr fixie echo park street art. Enamel pin vaporware wayfarers, organic
                  succulents hella sustainable cardigan.
                </p>
                <p>
                  Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry +1
                  art party microdosing, put a bird on it brooklyn tilde distillery pork belly single-origin coffee
                  tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral intelligentsia leggings raw denim
                  kombucha tote bag messenger bag chambray vape coloring book scenester. Activated charcoal wayfarers
                  church-key tote bag synth brunch. Retro cornhole
                </p>
              </div>
            </div>
          </div>
          <div className="about__popup">
            <button className="about__popup-play" onClick={() => setModalIsOpen(true)}>
              <img className="about__popup-imgbtn" src={PlayBtn} alt="play button" />
            </button>
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Example Modal">
            <iframe
              width="99%"
              height="99%"
              src="https://www.youtube.com/embed/JKX0iqwuDpQ?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ref={(frame) => {
                if (frame) frame.setAttribute("frameBorder", "0");
              }}
            ></iframe>
          </Modal>
        </section>
        <section className="inspiration">
          <div className="container-fluid">
            <div className="inspiration__inner">
              <img className="inspiration__img" src={InspirationChair} alt="img" />
              <div className="inspiration__content">
                <h3 className="inspiration__title">Our Inspiration in details</h3>
                <p className="inspiration__text">
                  Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica jean
                  shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.
                </p>
                <ul className="inspiration__list">
                  <li className="inspiration__item">
                    <div className="inspiration__item-content">
                      <p className="inspiration__item-text">Design and technical drawings</p>
                      <p className="inspiration__num">80%</p>
                    </div>
                    <div className="inspiration__line inspiration__line1"></div>
                  </li>
                  <li className="inspiration__item">
                    <div className="inspiration__item-content">
                      <p className="inspiration__item-text">Measurments</p>
                      <p className="inspiration__num">70%</p>
                    </div>
                    <div className="inspiration__line inspiration__line2"></div>
                  </li>
                  <li className="inspiration__item">
                    <div className="inspiration__item-content">
                      <p className="inspiration__item-text">Furniture functionality analysis</p>
                      <p className="inspiration__num">75%</p>
                    </div>
                    <div className="inspiration__line inspiration__line3"></div>
                  </li>
                  <li className="inspiration__item">
                    <div className="inspiration__item-content">
                      <p className="inspiration__item-text">Interior visualization</p>
                      <p className="inspiration__num">40%</p>
                    </div>
                    <div className="inspiration__line inspiration__line4"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="partners">
          <div className="container-fluid">
            <div className="partners__items">
              <img className="partners__img" src={PartnersImg1} alt="img" />
              <img className="partners__img" src={PartnersImg2} alt="img" />
              <img className="partners__img" src={PartnersImg1} alt="img" />
              <img className="partners__img" src={PartnersImg2} alt="img" />
              <img className="partners__img" src={PartnersImg1} alt="img" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
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
      </main>
    </div>
  );
};

export default About;
