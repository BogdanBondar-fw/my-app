import React from "react";
import { Link } from "react-router-dom";

import SearchImg from "../img/search-img.svg";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Pinterest from "../img/pinterest.svg";
import Whatsapp from "../img/whatsapp.svg";
import YouTybe from "../img/youtube.svg";
import BlogImg1 from "../img/blog-img1.jpeg";
import Avatar from "../img/avatar.jpeg";

const BlogPage1: React.FC = () => {
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
                  <Link className="breadcrumbs__link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="/blog-page">
                    Page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <section className="blog">
            <div className="container">
              <div className="blog__inner">
                <div className="blog__items">
                  <div className="blog__item">
                    <img className="blog__item-img" src={BlogImg1} alt="img" />
                    <div className="blog__item-info">
                      <span className="blog__item-date">August 15, 2020</span> |
                      <Link className="blog__item-author" to="/">
                        by Ann Summers
                      </Link>
                      |
                      <Link className="blog__item-theme" to="/">
                        Bedroom Furniture
                      </Link>
                    </div>
                    <Link to="/blog-page">
                      <h3 className="blog__item-title">
                        Red selfies edison bulb four dollar toast humblebrag for the furniture
                      </h3>
                    </Link>
                    <p className="blog__item-text">
                      Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally
                      williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel
                      pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok
                      taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps
                      humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled
                      austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                      coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin edison bulb
                      cloud bread vegan street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep
                      v marfa kogi whatever swag pop-up seitan.
                    </p>
                    <blockquote className="blog-page__blockquote">
                      “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                      <div className="blog-page__blockquote-author">Paul Rand</div>
                    </blockquote>
                    <p className="blog__item-text blog-page__item-text">
                      Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring
                      book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie
                      portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware pickled cray
                      stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut
                      irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche.
                      Tousled yr williamsburg austin edison bulb cloud bread vegan street art. Locavore food truck trust
                      fund palo santo asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.
                    </p>
                    <div className="blog__tags">
                      <h6 className="blog__tags-title">Tags</h6>
                      <Link className="blog__tags-link" to="/">
                        Dining room futniture
                      </Link>
                      <Link className="blog__tags-link" to="/">
                        Chair
                      </Link>
                      <Link className="blog__tags-link" to="/">
                        Table
                      </Link>
                      <Link className="blog__tags-link" to="/">
                        Bedroom
                      </Link>
                      <Link className="blog__tags-link" to="/">
                        Office Furniture
                      </Link>
                    </div>
                    <div className="blog-page__box">
                      <div className="blog-page__comments">
                        <h4 className="blog-page__comments-title">Comments:</h4>
                      </div>
                      <div className="blog-page__comments-item">
                        <img className="blog-page__comments-avatar" src={Avatar} alt="img" />
                        <div className="blog-page__comments-info">
                          <p className="blog-page__comments-name">Lea Brown</p>
                          <p className="blog-page__comments-date">August 12, 2020</p>
                          <p className="blog-page__comments-text">
                            Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony intelligentsia
                            YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                          </p>
                        </div>
                        <button className="blog-page__comments-btn">Reply</button>
                      </div>
                      <form className="blog__form blog-page__form">
                        <h6 className="blog__form-title">Post a Comment</h6>
                        <textarea className="blog__form-area" placeholder="Your comment"></textarea>
                        <input className="blog__form-input" placeholder="Your name" type="text" />
                        <input className="blog__form-input" placeholder="Your e-mail" type="email" />
                        <label className="blog__form-label">
                          <input className="blog__form-checkbox" type="checkbox" />
                          Remember me
                        </label>
                        <button className="blog__form-btn" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <aside className="aside">
                  <form className="aside__search">
                    <input className="aside__search-input" type="text" placeholder="Search" />
                    <button className="aside__search-btn" type="submit">
                      <img src={SearchImg} alt="img" />
                    </button>
                  </form>
                  <div className="blog__category">
                    <h6 className="blog__category-title">Categories</h6>
                    <ul className="blog__category-list">
                      <li className="blog__category-item">
                        <Link className="blog__category-link" to="/">
                          Dining room (1)
                        </Link>
                      </li>
                      <li className="blog__category-item">
                        <Link className="blog__category-link" to="/">
                          Office furniture (12)
                        </Link>
                      </li>
                      <li className="blog__category-item">
                        <Link className="blog__category-link" to="/">
                          Simple interiror design (2)
                        </Link>
                      </li>
                      <li className="blog__category-item">
                        <Link className="blog__category-link" to="/">
                          Design (4)
                        </Link>
                      </li>
                      <li className="blog__category-item">
                        <Link className="blog__category-link" to="/">
                          Bedroom Furniture (1)
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="recent-posts">
                    <h6 className="recent-posts__title">Recent Posts</h6>
                    <ul className="recent-posts__list">
                      <li className="recent-posts__item">
                        <Link className="recent-posts__item-title" to="/">
                          Cred selfies edison bulb four dollar toast humblebrag
                        </Link>
                        <span className="recent-posts__date">August 10, 2020</span>|
                        <Link className="recent-posts__author" to="/">
                          by Ann Summers
                        </Link>
                      </li>
                      <li className="recent-posts__item">
                        <Link className="recent-posts__item-title" to="/">
                          Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
                        </Link>
                        <span className="recent-posts__date">September 30, 2020</span>|
                        <Link className="recent-posts__author" to="/">
                          by Ann Summers
                        </Link>
                      </li>
                      <li className="recent-posts__item">
                        <Link className="recent-posts__item-title" to="/">
                          Cred selfies edison bulb four dollar toast humblebrag
                        </Link>
                        <span className="recent-posts__date">May 2, 2020</span>|
                        <Link className="recent-posts__author" to="/">
                          by Ann Summers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__tags">
                    <h6 className="blog__tags-title">Tags</h6>
                    <Link className="blog__tags-link" to="/">
                      Dining room futniture
                    </Link>
                    <Link className="blog__tags-link" to="/">
                      Chair
                    </Link>
                    <Link className="blog__tags-link" to="/">
                      Table
                    </Link>
                    <Link className="blog__tags-link" to="/">
                      Bedroom
                    </Link>
                    <Link className="blog__tags-link" to="/">
                      Office Furniture
                    </Link>
                  </div>
                  <ul className="blog__social">
                    <li className="blog__social-item">
                      <Link className="blog__social-link" to="https://www.facebook.com/">
                        <img className="blog__social-img" src={Facebook} alt="img" />
                      </Link>
                    </li>
                    <li className="blog__social-item">
                      <Link className="blog__social-link" to="https://www.instagram.com/">
                        <img className="blog__social-img" src={Instagram} alt="img" />
                      </Link>
                    </li>
                    <li className="blog__social-item">
                      <Link className="blog__social-link" to="https://www.pinterest.com/">
                        <img className="blog__social-img" src={Pinterest} alt="img" />
                      </Link>
                    </li>
                    <li className="blog__social-item">
                      <Link className="blog__social-link" to="https://web.whatsapp.com/">
                        <img className="blog__social-img" src={Whatsapp} alt="img" />
                      </Link>
                    </li>
                    <li className="blog__social-item">
                      <Link className="blog__social-link" to="https://www.youtube.com/">
                        <img className="blog__social-img" src={YouTybe} alt="img" />
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BlogPage1;
