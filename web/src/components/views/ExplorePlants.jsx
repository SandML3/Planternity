import "../../assets/styles/components/ExplorePlants.scss";

//import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import InputText from "../commons/InputText";
import PlantItem from "../commons/PlantItem";
import ButtonBack from "../commons/ButtonBack";
import PlantsTypesView from "../sections/PlantsTypesView";

const ExplorePlants = ({
  userData,
  sendUserPlantsToApi,
  getPlantsFromApi,
  userPlants,
  addUserPlant,
  deleteUserPlant,
}) => {
  //State variables
  const [allPlants, setAllPlants] = useState([]);
  const [filterPlants, setFilterPlants] = useState({ name: "" });
  const [viewSelected, setViewSelected] = useState({
    view: "all",
    subView: null,
  });

  //Lifting fuctions
  const updateFilterPlants = (key, value) => {
    setFilterPlants({ ...filterPlants, [key]: value });
  };

  const updateViewSelected = (view) => {
    setViewSelected({ ...viewSelected, subView: view });
  };

  useEffect(() => {
    getPlantsFromApi().then((response) => setAllPlants(response.plants));
  }, [getPlantsFromApi]);

  //Send new plant to api and update the state variable
  const updatePlantsData = (newPlantId) => {
    sendUserPlantsToApi(newPlantId);

    const newPlant = allPlants.find(
      (plant) => plant.id === parseInt(newPlantId)
    );

    const isUserPlant = !!userPlants.find(
      (plant) => plant.id === parseInt(newPlantId)
    );

    !isUserPlant ? addUserPlant(newPlant) : deleteUserPlant(newPlantId);
  };

  if (viewSelected.subView) {
    allPlants.filter((plant) => plant.type === viewSelected.subView);
  }

  const plantsList = allPlants
    .filter((plant) => {
      return viewSelected.subView ? plant.type === viewSelected.subView : true;
    })
    .filter(
      (plant) =>
        plant.common_name
          .toLowerCase()
          .includes(filterPlants.name.toLowerCase()) ||
        plant.scientific_name
          .toLowerCase()
          .includes(filterPlants.name.toLowerCase())
    )
    .map((plant, index) => {
      const isUserPlant = !!userPlants.find(
        (userPlant) => userPlant.id === parseInt(plant.id)
      );

      return (
        <li key={index} className="plantList__item">
          <PlantItem
            isUserPlant={isUserPlant}
            plant={plant}
            updatePlantsData={updatePlantsData}
          />
        </li>
      );
    });

  const selectView = (ev) => {
    ev.preventDefault();
    setViewSelected({
      ...viewSelected,
      view: ev.currentTarget.id,
      subView: null,
    });
  };

  const listContent =
    viewSelected.view === "all" ? (
      <ul className="explorePlants__main__plantList">{plantsList}</ul>
    ) : viewSelected.view === "types" && !viewSelected.subView ? (
      <PlantsTypesView updateViewSelected={updateViewSelected} />
    ) : (
      <ul className="explorePlants__main__plantList">{plantsList}</ul>
    );

  return (
    <div className="explorePlants">
      <header className="explorePlants__header">
        <ButtonBack
          className="explorePlants__header__nav"
          userId={userData.id}
        />
        <h1 className="explorePlants__header__title">
          Descubre nuevas plantas
        </h1>
        <p className="explorePlants__header__text">
          Busca plantas por su nombre común, nombre científico o por variedad.
        </p>
        <form className="link explorePlants__header__form">
          <InputText
            name="name"
            type="text"
            value={filterPlants.name}
            updateStateVar={updateFilterPlants}
            labelText=""
            placeholder="Buscar plantas por nombre"
          />
          <div className="explorePlants__header__form__selectPlantsView">
            <button
              id="all"
              onClick={selectView}
              className={`explorePlants__header__form__selectPlantsView__button ${
                viewSelected.view === "all" ? "active" : null
              }`}
            >
              Ver todas
            </button>
            <button
              className={`explorePlants__header__form__selectPlantsView__button ${
                viewSelected.view === "types" ? "active" : null
              }`}
              onClick={selectView}
              id="types"
            >
              Buscar por tipo
            </button>
          </div>
        </form>
      </header>
      <main className="explorePlants__main">{listContent}</main>
    </div>
  );
};

export default ExplorePlants;
