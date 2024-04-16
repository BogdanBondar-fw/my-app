import BigLogo from "../../img/big-logo.png";
import Rectangle from "../../img/rectangle.jpeg";
import Path from "../../img/path.svg";
import { Link } from "react-router-dom";

const RightsideMenu = ({ active, setActive }: { active: boolean; setActive: (active: boolean) => void }) => {
  return (
    <div className={active ? "rightside-menu rightside-menu__active" : "rightside-menu"}>
      <div className="rightside-menu-content">
        <div className="rightside-menu--close">
          <button className="rightside-menu__close" onClick={() => setActive(false)}>
            <img src={Path} alt="img" />
          </button>
          <div className="rightside-menu__content">
            <Link className="rightside-menu__logo" to="main">
              <img src={BigLogo} alt="big-logo" />
            </Link>
            <h4 className="rightside-menu__title">Furniture for life</h4>
            <p className="rightside-menu__text">
              Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry +1 art
              party microdosing, put a bird on it brooklyn
            </p>
            <img className="rightside-menu__img" src={Rectangle} alt="rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsideMenu;
