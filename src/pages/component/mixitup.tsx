import React, { useEffect } from "react";
import mixitup from "mixitup";
import { Link } from "react-router-dom";

import GalleryImg1 from "../../img/gallery-img1.jpg";
import GalleryImg2 from "../../img/gallery-img2.jpg";
import GalleryImg3 from "../../img/gallery-img3.jpg";
import GalleryImg4 from "../../img/gallery-img4.jpg";
import GalleryImg5 from "../../img/gallery-img5.jpg";

const MixComponent: React.FC = () => {
  useEffect(() => {
    const mixer = mixitup(".main-gallery__inner", {
      load: {
        filter: ".living",
      },
    });

    return () => {
      mixer.destroy();
    };
  }, []);

  return (
    <div className="main-gallery">
      <div className="container-fluid">
        <div className="main-gallery__buttons">
          <button className="main-gallery__btn" data-filter=".bedroom">
            Bedroom furniture
          </button>
          <button className="main-gallery__btn" data-filter=".living">
            Living room furniture
          </button>
          <button className="main-gallery__btn" data-filter=".office">
            Office furniture
          </button>
          <button className="main-gallery__btn" data-filter=".dining">
            Dining room futniture
          </button>
          <button className="main-gallery__btn" data-filter=".chair">
            Chair
          </button>
        </div>
        <div className="main-gallery__inner">
          <div className="main-gallery__items mix bedroom">
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg1} alt="bedroom img 1" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg2} alt="bedroom img 2" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg3} alt="bedroom img 3" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg4} alt="bedroom img 4" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg5} alt="bedroom img 5" />
            </Link>
          </div>
          <div className="main-gallery__items mix living">
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg1} alt="living img 1" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg2} alt="living img 2" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg3} alt="living img 3" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg4} alt="living img 4" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg5} alt="living img 5" />
            </Link>
          </div>
          <div className="main-gallery__items mix office">
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg1} alt="office img 1" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg2} alt="office img 2" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg3} alt="office img 3" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg4} alt="office img 4" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg5} alt="office img 5" />
            </Link>
          </div>
          <div className="main-gallery__items mix dining">
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg1} alt="dining img 1" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg2} alt="dining img 2" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg3} alt="dining img 3" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg4} alt="dining img 4" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg5} alt="dining img 5" />
            </Link>
          </div>
          <div className="main-gallery__items mix chair">
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg1} alt="chair img 1" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg2} alt="chair img 2" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg3} alt="chair img 3" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg4} alt="chair img 4" />
            </Link>
            <Link className="main-gallery__item" to="/gallery">
              <img src={GalleryImg5} alt="chair img 5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixComponent;
