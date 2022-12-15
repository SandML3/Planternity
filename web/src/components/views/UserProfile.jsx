import "../../styles/components/UserProfile.scss";
import logo from "../../images/logo_color.svg";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = ({
  userData,
  userPlants,

  getUserDataFromApi,
  saveInLocalStorage,
  getUserPlantsFromApi,
  updateUserPlants,
  updateUserData,
  sendUserPlantsToApi,
}) => {
  const params = useParams();

  const userPlantList = userPlants
    ? userPlants.map((plant) => {
        return (
          <li className="main__user__myPlantsList__item" key={plant.id}>
            <Link to={`/user/${params.userId}/plant/${plant.id}`}>
              <img
                src={require(`../../images/plants/${plant.image}.jpg`)}
                title={`Foto de ${plant.common_name}`}
                alt={`Foto de ${plant.common_name}`}
                className="main__user__myPlantsList__image"
              />
            </Link>
          </li>
        );
      })
    : null;

  useEffect(() => {
    if (
      params.userId &&
      Object.values(userData).some((value) => value === "")
    ) {
      getUserDataFromApi(params.userId).then((response) => {
        saveInLocalStorage("userData", response.userData);
      });

      getUserPlantsFromApi(params.userId).then((response) => {
        console.log(response.plants, params.userId);
        saveInLocalStorage("userPlants", response.plants);
      });
    }
  }, [
    getUserDataFromApi,
    getUserPlantsFromApi,
    params.userId,
    saveInLocalStorage,
    userData,
  ]);

  const myPlantsContent =
    userPlants.length === 0 ? (
      <div className="main__user__myPlantsList__contain">
        <p className="main__user__myPlantsList__text">
          <span className="bolder">¿Todavía no has añadido plantitas?</span>{" "}
          ¡Eso hay que solucionarlo!
        </p>
        <Link to={`/plants`} className="main__user__myPlantsList__link link">
          {" "}
          Añade tu primera planta{" "}
        </Link>
      </div>
    ) : (
      <ul className="main__user__myPlantsList">{userPlantList}</ul>
    );

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
        <section className="main__user__myPlants">
          <h2 className="main__user__myPlants__title">Mis plantas</h2>
          {myPlantsContent}
        </section>

        <ul className="main__user__options">
          <li className="main__user__options__item">
            <Link to={`/plants`} className="itemContain link">
              <i className="fa-solid fa-magnifying-glass icon"></i>
              Buscar
            </Link>
          </li>
          <li className="main__user__options__item">
            <Link to="" className="itemContain link">
              <i className="fa-solid fa-book icon"></i>
              Consejos
            </Link>
          </li>
          <li className="main__user__options__item">
            <Link to="" className="itemContain link">
              <i className="fa-regular fa-calendar icon"></i>
              Calendario
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};
export default UserProfile;
