import "../../styles/components/ExplorePlants.scss";

//import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InputText from "../commons/InputText";
import PlantItem from "../commons/PlantItem";

const ExplorePlants = ({
  userData,
  sendUserPlantsToApi,
  getPlantsFromApi,
  userPlants,
  updateUserPlants,
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
    updateUserPlants(newPlant);
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
    .map((plant, index) => (
      <li key={index} className="plantList__item">
        <PlantItem
          userPlants={userPlants}
          updateUserPlants={updateUserPlants}
          plant={plant}
          updatePlantsData={updatePlantsData}
        />
      </li>
    ));

  return (
    <div className="explorePlants">
      <header className="explorePlants__header">
        <nav className="explorePlants__header__nav">
          <Link
            to={`/user/${userData.id}`}
            className="link explorePlants__header__link"
          >
            Volver
          </Link>
        </nav>
        <h1 className="explorePlants__header__title">Añadir plantas</h1>
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
