import "../../assets/styles/components/UserProfile.scss";
import logo from "../../assets/images/logo_white.svg";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import InputText from "../commons/InputText";

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
  const [filterPlants, setFilterPlants] = useState({ name: "" });
  const params = useParams();

  const updateFilterValue = (key, value) => {
    setFilterPlants({ ...filterPlants, [key]: value });
  };

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

  const userPlantList = userPlants
    ? userPlants
        .filter(
          (plant) =>
            plant.common_name
              .toLowerCase()
              .includes(filterPlants.name.toLowerCase()) ||
            plant.scientific_name
              .toLowerCase()
              .includes(filterPlants.name.toLowerCase())
        )
        .map((plant) => {
          return (
            <li className="main__user__myPlantsList__item" key={plant.id}>
              <Link to={`/user/${params.userId}/plant/${plant.id}`}>
                <div className="main__user__myPlantsList__imageWrapper">
                  <img
                    src={require(`../../assets/images/plants/${plant.image}.jpg`)}
                    title={`Foto de ${plant.common_name.split(",")[0]}`}
                    alt={`Foto de ${plant.common_name.split(",")[0]}`}
                    className="main__user__myPlantsList__image"
                  />
                </div>
                <p className="main__user__myPlantsList__name">
                  {plant.common_name.split(",")[0]}
                </p>
              </Link>
            </li>
          );
        })
    : null;

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
        <h1 className="header__user__title">¡Hola {userData.name}!</h1>
        <p className="header__user__text">Bienvenida a tu edén particular</p>
        <Link to="/" title="Volver a Home">
          <img className="logo" src={logo} alt="logo" title="Logo" />
        </Link>
      </header>

      <main className="main__user">
        <section className="main__user__myPlants">
          <h2 className="main__user__myPlants__title">Plantas</h2>
          <form className="main__user__myPlants__input">
            <InputText
              placeholder="Buscar entre mis plantas"
              name="name"
              value={filterPlants.name}
              updateStateVar={updateFilterValue}
              labelText=""
              type="text"
            />
          </form>
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
