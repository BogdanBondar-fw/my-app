import { Link } from "react-router-dom";

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
            <div className="blog__items"></div>
            <aside className="aside">
              <form className="aside__search">
                <input
                  className="aside__search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="aside__search-btn" type="submit"></button>
              </form>
              <div className="blog__category">
                <h6 className="blog__category-title"></h6>
                <ul className="blog__category-list"></ul>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
};
export default Blog;
