import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import SearchImg from "../img/search-img.svg";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Pinterest from "../img/pinterest.svg";
import Whatsapp from "../img/whatsapp.svg";
import YouTybe from "../img/youtube.svg";
import Avatar from "../img/avatar.jpeg";
import PopupIMG from "../img/blog-img3.jpeg";
import PlayBtn from "../img/play-button.svg";

const BlogPage1: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
                    <div className="blog__item blog__popup">
                      <div className="blog__popup-box">
                        <div className="blog__popup-img">
                          <img className="blog__popup-img" src={PopupIMG} alt="img" />
                        </div>
                        <button className="blog__popup-play" onClick={() => setModalIsOpen(true)}>
                          <img className="blog__popup-imgbtn" src={PlayBtn} alt="play button" />
                        </button>
                      </div>
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        contentLabel="Example Modal"
                      >
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
                      <div className="blog__item-info">
                        <span className="blog__item-date">August 12, 2020</span> |
                        <Link className="blog__item-author" to="/">
                          by Lux Morningstar
                        </Link>
                        |
                        <Link className="blog__item-theme" to="/">
                          Design
                        </Link>
                      </div>
                      <Link to="/blog-page2">
                        <h3 className="blog__item-title">
                          Red selfies edison bulb four dollar toast humblebrag for the furniture
                        </h3>
                      </Link>
                      <p className="blog__item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odio tenetur illo dicta.
                        Reiciendis tenetur dignissimos, blanditiis laborum impedit facere molestiae enim. Ut illo sunt
                        nobis, cupiditate id tempora voluptates repellendus assumenda quisquam mollitia at commodi,
                        eius, eos ullam aliquid esse enim quam cum illum laboriosam. Necessitatibus quasi quod commodi
                        labore enim libero aliquid! Commodi illum reprehenderit molestias magni, excepturi temporibus
                        voluptatibus nihil fugit. Dolore laborum optio pariatur iste dolorem iure, vel doloremque
                        debitis veniam dolorum saepe modi repudiandae deleniti vitae possimus, molestias quod totam
                        aspernatur ut quae ipsam vero atque? Possimus quo quisquam odit sed obcaecati quas iste
                        repudiandae reiciendis aliquam! Molestias cum earum quod ratione? Amet soluta, dolore eaque
                        numquam quae molestiae tempora ullam? Sit sapiente fugiat quam dolores exercitationem. Minima
                        culpa voluptatibus earum? Dolorum pariatur nobis id, doloribus repellat inventore obcaecati
                        dolorem quibusdam. Ratione corporis ipsam eius ullam sapiente cum quae porro aliquam iusto
                        veniam?
                      </p>
                      <blockquote className="blog-page__blockquote">
                        “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                        <div className="blog-page__blockquote-author">Paul Rand</div>
                      </blockquote>
                      <p className="blog__item-text blog-page__item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore reiciendis inventore sit
                        odio, accusamus quidem repellendus provident, nulla voluptatibus expedita voluptatem. Aliquam
                        error dolorem nisi numquam, ex ut quos illum animi quibusdam sint sapiente magni hic recusandae
                        vero excepturi? Maiores rem quasi corporis quam, totam dolores eos sequi aperiam neque
                        necessitatibus id architecto nulla ea alias qui? Iste quidem fuga cupiditate ratione, recusandae
                        temporibus eveniet cumque expedita excepturi alias optio accusantium reprehenderit eius et
                        nostrum eaque cum tempore veritatis repellat sunt placeat aperiam soluta. Quasi eaque quo earum
                        quisquam impedit. Quod ex error nihil vitae, quae distinctio commodi quos!
                      </p>
                    </div>
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
