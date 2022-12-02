// import { Link } from 'react-router-dom';
import "../styles/UserProfile.scss";
import logo from "../images/logo_color.svg";

import apiUser from "../services/api-users";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = ({ userData, updateUserData, sendUserPlantsToApi }) => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    apiUser
      .getUserPlantsFromApi()
      .then((response) => setAllPlants(response.plants));
  }, []);

  console.log(allPlants);

  const plantsList = allPlants.map((plant, index) => (
    <li key={index} className="header__user__plantList__item">
      <div className="plantImage__container">
        <img
          src={require(`../images/plants/${plant.image}.jpg`)}
          title={`Foto de ${plant.common_name}`}
          alt={`Foto de ${plant.common_name}`}
          className="plantImage"
        />
      </div>
      {plant.common_name}
    </li>
  ));

  return (
    <div className="page__user">
      <header className="header__user">
        <h1 className="header__user__title">¡Bienvenida, {userData.name}!</h1>
        <p className="header__user__text"></p>
        <Link to="/" title="Volver a Home">
          <img className="logo" src={logo} alt="logo" title="Logo" />
        </Link>

        <ul className="header__user__plantList">{plantsList}</ul>
      </header>
    </div>
  );
};
export default UserProfile;
