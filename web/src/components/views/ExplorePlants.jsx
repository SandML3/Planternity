import apiUser from "../../services/api-users";
import { useEffect, useState } from "react";

import "../../styles/components/ExplorePlants.scss";

const AvailablePlants = () => {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    apiUser
      .getUserPlantsFromApi()
      .then((response) => setAllPlants(response.plants));
  }, []);

  console.log(allPlants);

  const plantsList = allPlants.map((plant, index) => (
    <li key={index} className="plantList__item">
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

export default AvailablePlants;
