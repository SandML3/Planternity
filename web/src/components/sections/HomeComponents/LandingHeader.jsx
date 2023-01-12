import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import leavesLeft from "../../../assets/images/leaves_left.png";
import leavesRight from "../../../assets/images/leaves_right.png";
import smallLeavesRight from "../../../assets/images/small_leaves_right.png";

import "../../../assets/styles/components/LandingHeader.scss";
import logo from "../../../assets/images/logo_white.svg";

const LandingHeader = ({ isUserLogged, updateUserData }) => {
  //Header parallax.
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleCloseSesion = (ev) => {
    updateUserData("id", "");
  };

  const navigationBar = isUserLogged ? (
    <nav className="header__menu">
      <img src={logo} alt="logo" title="logo" className="logo" />
      <button
        to="/login"
        className="link closeSesion"
        onClick={handleCloseSesion}
      >
        Cerrar sesión
      </button>
    </nav>
  ) : (
    <nav className="header__menu">
      <img src={logo} alt="logo" title="logo" className="logo" />
      <li className="header__menu__item signup list_item">
        <Link to="/sign-up" className="link">
          Registrarse
        </Link>
      </li>
      <li className="header__menu__item login  list_item">
        <Link to="/login" className="link">
          Iniciar sesión
        </Link>
      </li>
    </nav>
  );

  return (
    <header className="header">
      {navigationBar}

      <section className="header__section">
        <img
          className="header__section__layer layer--one"
          src={leavesLeft}
          id="layerOne"
          title="Hojas de plantas"
          alt="Hojas de plantas"
          style={{ transform: `tarnslateY(-${offsetY * 0.01}deg)` }}
        />

        <img
          className="header__section__layer layer--two"
          src={smallLeavesRight}
          id="layerTwo"
          title="Hojas de plantas"
          alt="Hojas de plantas"
          style={{ transform: `rotate(-${offsetY * 0.02}deg)` }}
        />

        <img
          className="header__section__layer layer--three"
          src={leavesRight}
          id="layerThree"
          title="Hojas de plantas"
          alt="Hojas de plantas"
          style={{ transform: `translateX(${offsetY * 0.3}px)` }}
        />

        <h1
          className="header__section__title"
          style={{
            transform: `translateY(${offsetY * 0.4}px) scale(${
              1 + offsetY * 0.001
            })`,
          }}
        >
          pots<span className="special__letter">&</span>buds
        </h1>
      </section>
    </header>
  );
};

export default LandingHeader;
