import { Link } from "react-router-dom";
import "../../assets/styles/components/Home.scss";

import HomeHeader from "../sections/HomeComponents/HomeHeader";
import HomeSlider from "../sections/HomeComponents/HomeSlider";

const Home = ({ updateUserData, id, updateInfoMessage, infoMessage }) => {
  const linkPath = !!id ? `/user/${id}` : "";

  const handleClick = () => {
    id
      ? updateInfoMessage("home", "")
      : updateInfoMessage("home", "Inicia sesión antes de comezar");
  };

  return (
    <>
      <HomeHeader isUserLogged={!!id} updateUserData={updateUserData} />
      <main className="main">
        <section className="main__home__text">
          <h3 className="main__home__text__title">
            ¡Nos alegra verte por aquí!
          </h3>
          <p className="main__home__text__text">
            ¿Te interesan las plantas pero no tienes tiempo para sentarte a
            recopilar información sobre sus cuidados?{" "}
          </p>
          <p className="main__home__text__text">
            Si, como en nuestro caso, la respuesta es{" "}
            <span className="bolder">SÍ</span>, no te preocupes, estamos aquí
            para facilitarte la vida.
          </p>
          <p className="main__home__text__text--two">¡Quédate a comprobarlo!</p>
        </section>

        <HomeSlider />
        <Link
          to={linkPath}
          className="landing__start__button link"
          onClick={handleClick}
        >
          Comenzar
        </Link>
        <p className="userMessage">{infoMessage}</p>
      </main>
    </>
  );
};

export default Home;
