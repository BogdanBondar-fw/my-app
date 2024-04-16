import { Link } from "react-router-dom";

import SearchImg from "../img/search-img.svg";
import Facebook from "../img/facebook.svg";
import Instagram from "../img/instagram.svg";
import Pinterest from "../img/pinterest.svg";
import Whatsapp from "../img/whatsapp.svg";
import YouTybe from "../img/youtube.svg";

import "../css/style.css";

const Blog = () => {
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
                  <Link className="breadcrumbs__link" to="/about">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <section className="blog">
            <div className="container">
              <div className="blog__inner">
                <div className="blog__items"></div>
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
                  <div className="blog_tags">
                    <h6 className="blog_tags__title">Tags</h6>
                    <Link className="blog_tags__link" to="/">
                      Dining room futniture
                    </Link>
                    <Link className="blog_tags__link" to="/">
                      Chair
                    </Link>
                    <Link className="blog_tags__link" to="/">
                      Table
                    </Link>
                    <Link className="blog_tags__link" to="/">
                      Bedroom
                    </Link>
                    <Link className="blog_tags__link" to="/">
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
export default Blog;
