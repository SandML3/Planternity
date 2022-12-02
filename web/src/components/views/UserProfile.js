import "../../styles/UserProfile.scss";
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
    </div>
  );
};
export default UserProfile;
