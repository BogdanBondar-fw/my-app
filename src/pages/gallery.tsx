import { Link } from "react-router-dom";
import MixGallery from "./component/mixitupgallery";

const Gallery = () => {
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
                  <Link className="breadcrumbs__link" to="/gallery">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <MixGallery />
        </main>
      </div>
    </>
  );
};
export default Gallery;
