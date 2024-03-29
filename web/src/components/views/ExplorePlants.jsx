import "../../assets/styles/components/ExplorePlants.scss";

//import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import InputText from "../commons/InputText";
import PlantItem from "../commons/PlantItem";
import ButtonBack from "../commons/ButtonBack";

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

  //Lifting fuctions
  const updateFilterPlants = (key, value) => {
    setFilterPlants({ ...filterPlants, [key]: value });
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

  const plantsList = allPlants
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
        </form>
      </header>
      <main className="explorePlants__main">
        <ul className="explorePlants__main__plantList">{plantsList}</ul>
      </main>
    </div>
  );
};

export default ExplorePlants;
