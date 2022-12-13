import "../../styles/components/ExplorePlants.scss";

import apiUser from "../../services/api-users";

import { useState, useEffect } from "react";

const ExplorePlants = ({ sendUserPlantsToApi }) => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    apiUser
      .getPlantsFromApi()
      .then((response) => setAllPlants(response.plants));
  }, []);

  const handleClick = (ev) => {
    const newPlant = ev.currentTarget.id;
    sendUserPlantsToApi(newPlant);
  };

  const plantsList = allPlants.map((plant, index) => (
    <li key={index} className="plantList__item">
      <div onClick={handleClick} id={plant.id}>
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      <div className="plantImage__container">
        <img
          src={require(`../../images/plants/${plant.image}.jpg`)}
          title={`Foto de ${plant.common_name}`}
          alt={`Foto de ${plant.common_name}`}
          className="plantImage"
        />
      </div>
      <p className="plantName">{plant.common_name}</p>
    </li>
  ));

  return <ul className="plantList">{plantsList}</ul>;
};

export default ExplorePlants;
