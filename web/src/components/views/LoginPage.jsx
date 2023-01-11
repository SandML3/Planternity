// import { useState } from 'react';
import { Link } from "react-router-dom";

import InputText from "../commons/InputText";

import headerImage from "../../assets/images/login_header.jpg";
import logo from "../../assets/images/logo_color.svg";
import "../../assets/styles/components/LoginPage.scss";

const LoginPage = ({
  userData,
  updateUserData,
  sendLoginToApi,
  loginMessage,
  updateInfoMessage,
}) => {
  const handleClick = (ev) => {
    ev.preventDefault();

    sendLoginToApi({
      email: userData.email,
      password: userData.password,
    }).then((response) => {
      console.log(response);
      if (response.success) {
        updateUserData("id", response.userId);
        return (window.location.href = `/user/${response.userId}`);
      } else {
        updateInfoMessage("login", response.errorMessage);
      }
    });
  };

  return (
    <>
      <header className="header__login">
        <Link className="link header__sign-up__link" to="/">
          Volver al inicio
        </Link>
        <img
          src={headerImage}
          className="header__login__image"
          alt=""
          title=""
        />
        <img src={logo} className="header__login__logo" alt="" title="" />
        <h1 className="header__login__title"> ¡Hola de nuevo! </h1>
        <p className="header__login__text">
          Inicia sesión para seguir aprendiendo
        </p>
      </header>
      <main className="main__login">
        <form className="main__login__form">
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
            Enviar
          </button>
        </form>

        <p className="main__login__message">{loginMessage}</p>

        <p className="main__login__link">
          ¿Todavía no tienes una cuenta?{" "}
          <Link className="in-line__link" to="/sign-up">
            Regístrate gratis
          </Link>
        </p>
      </main>
    </>
  );
};

export default LoginPage;
