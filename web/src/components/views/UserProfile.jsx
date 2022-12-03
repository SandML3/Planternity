import "../../styles/components/UserProfile.scss";
import logo from "../../images/logo_color.svg";

import { Link } from "react-router-dom";

const UserProfile = ({ userData, updateUserData, sendUserPlantsToApi }) => {
  return (
    <div className="page__user">
      <header className="header__user">
        <h1 className="header__user__title">¡Bienvenida, {userData.name}!</h1>
        <p className="header__user__text"></p>
        <Link to="/" title="Volver a Home">
          <img className="logo" src={logo} alt="logo" title="Logo" />
        </Link>
      </header>

      <main className="main__user">
        <section className="header__user__myPlants">
          <h2>Mis plantas</h2>
          <ul className="header__user__myPlantsList">
            <li className="header__user__myPlantsList__item">Mi plantita</li>
          </ul>
        </section>

        <ul className="header__user__options">
          <li className="header__user__options__item">Buscar</li>
          <li className="header__user__options__item">Consejos</li>
          <li className="header__user__options__item">Calendario</li>
        </ul>
      </main>
    </div>
  );
};
export default UserProfile;
