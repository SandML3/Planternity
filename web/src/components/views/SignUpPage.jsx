import "../../assets/styles/components/SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";

import InputText from "../commons/InputText";

import headerImage from "../../assets/images/login_header.jpg";
import logo from "../../assets/images/logo_color.svg";

const SignUpPage = ({
  userData,
  updateUserData,
  updateInfoMessage,
  signUpMessage,
  sendSingUpToApi,
}) => {
  const navigate = useNavigate();

  const handleClick = (ev) => {
    ev.preventDefault();
    sendSingUpToApi({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    }).then((response) => {
      if (response.success) {
        updateUserData("id", response.userId);
        navigate(`/user/${response.userId}`);
      } else {
        updateInfoMessage("signUp", response.errorMessage);
      }
    });
  };

  return (
    <>
      <header className="header__sign-up">
        <Link className="link header__sign-up__link" to="/">
          Volver al inicio
        </Link>
        <img
          src={headerImage}
          className="header__sign-up__image"
          alt=""
          title=""
        />
        <img src={logo} className="header__sign-up__logo" alt="" title="" />
        <h1 className="header__sign-up__title"> ¡Bienvenida! </h1>
        <p className="header__sign-up__text">
          Regístrate para convertirte en una{" "}
          <span className="cursive">crack</span> de las plantas
        </p>
      </header>
      <main className="main__sign-up">
        <form className="main__sign-up__form">
          <div>
            <InputText
              name="name"
              type="text"
              value={userData.name}
              updateStateVar={updateUserData}
              labelText="Nombre de usuario"
              placeholder="Nombre"
            />
          </div>

          <div>
            <InputText
              name="email"
              type="text"
              value={userData.email}
              updateStateVar={updateUserData}
              labelText="Dirección de correo electrónico"
              placeholder="Dirección de correo"
            />
          </div>

          <div>
            <InputText
              name="password"
              type="password"
              value={userData.password}
              updateStateVar={updateUserData}
              labelText="Contraseña"
              placeholder="Contraseña"
            />
          </div>

          <button className="submit__button" onClick={handleClick}>
            Crear una cuenta
          </button>
        </form>

        <p className="main__sign-up__message">{signUpMessage}</p>
      </main>
    </>
  );
};

export default SignUpPage;
