import "../../assets/styles/components/UserProfile.scss";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import InputText from "../commons/InputText";
import PlantItem from "../commons/PlantItem";

const UserProfile = ({
  userData,
  userPlants,
  getUserDataFromApi,
  saveInLocalStorage,
  getUserPlantsFromApi,
  deleteUserPlant,
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

  const getPlantDetails = (ev) => {
    if (
      ev.target.className === "plantItem__image" ||
      ev.target.className === "plantItem__name"
    ) {
      window.location.href = `/user/${params.userId}/plant/${ev.currentTarget.id}`;
    }
  };

  const updatePlantsData = (plantId) => {
    sendUserPlantsToApi(plantId);
    deleteUserPlant(plantId);
  };

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
            <li
              className="main__user__myPlantsList__item"
              key={plant.id}
              id={plant.id}
              onClick={getPlantDetails}
            >
              <PlantItem
                isUserPlant={true}
                plant={plant}
                updatePlantsData={updatePlantsData}
              />
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
        <div className="header__user__text">
          <p className="header__user__text--greeting">Bienvenida,</p>
          <p className="header__user__text--name"> {userData.name}</p>
        </div>

        <i className="header__user__settings fa-solid fa-gear"></i>
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
              {/* Buscar */}
            </Link>
          </li>
          <li className="main__user__options__item">
            <Link to="" className="itemContain link">
              <i className="fa-solid fa-book icon"></i>
              {/* Consejos */}
            </Link>
          </li>
          <li className="main__user__options__item">
            <Link to="" className="itemContain link">
              <i className="fa-regular fa-calendar icon"></i>
              {/* Calendario */}
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};
export default UserProfile;
