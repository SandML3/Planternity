import { useNavigate } from "react-router-dom";

import ls from "../../services/localstorage";
import "../../assets/styles/components/SettingsMenu.scss";

const SettingsMenu = ({ setMenuClose, updateUserData }) => {
  const navigate = useNavigate();

  const exitMenu = () => {
    setMenuClose();
  };

  const logOut = () => {
    updateUserData("id", "");
    ls.remove("userData");
    navigate("/");
  };

  return (
    <div className="settingsMenu">
      <header className="settingsMenu__header">
        <button onClick={exitMenu} className="settingsMenu__header__backButton">
          Volver
        </button>
        <h1 className="settingsMenu__header__title">Ajustes</h1>
      </header>
      <main className="settingsMenu__main">
        <ul className="settingsMenu__main__list">
          <li className="settingsMenu__main__item">
            Cambiar nombre de usuario
          </li>
          <li className="settingsMenu__main__item">Cambiar contraseña</li>
          <li className="settingsMenu__main__item">Ajustes tema</li>
          <li className="settingsMenu__main__item" onClick={logOut}>
            Cerrar sesión
          </li>
        </ul>
      </main>
    </div>
  );
};
export default SettingsMenu;
