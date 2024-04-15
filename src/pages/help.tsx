import { Link } from "react-router-dom";

import "../css/style.css";

const Help = () => {
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
                  <Link className="breadcrumbs__link" to="/help">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Help;
