import "../../styles/components/PlantDetails.scss";

import { useParams } from "react-router-dom";

const PlantDetails = ({ userPlants }) => {
  const plantId = useParams().plantId;
  const plant = userPlants.find((plant) => plant.id === parseInt(plantId));
  console.log(plant);

  return (
    <div className="plantDetail">
      <header
        className="plantDetail__header"
        style={{
          backgroundImage: `url("${require(`../../images/plants/${plant.image}.jpg`)}")`,
        }}
      >
        <h2 className="plantDetail__header__title">{plant.common_name}</h2>
        <h3 className="plantDetail__header__subtitle">
          {plant.scientific_name}
        </h3>
      </header>
      <main className="plantDetail__main">
        <p className="plantDetail__main__text">
          <span className="bolder">Familia: </span>: {plant.family}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Género: </span> {plant.genus}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Origen: </span>
          {plant.origin}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Luz: </span>
          {plant.light_conditions}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Sustrato: </span>
          {plant.soil_type} <span className="bolder"> Ph: </span>{" "}
          {plant.soil_ph}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Temperatura: </span>
          {plant.temperature}
        </p>

        <p className="plantDetail__main__text">
          <span className="bolder">Humedad: </span>
          {plant.humidity}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Riego: </span>
          {plant.water_requirements}
        </p>

        <p className="plantDetail__main__text">
          <span className="bolder">Transplante: </span>
          {plant.potting}
        </p>

        <p className="plantDetail__main__text">
          <span className="bolder">Propagación: </span>
          {plant.propagation}
        </p>
        <p className="plantDetail__main__text">
          <span className="bolder">Curiosidades: </span>
          {plant.curiosities}
        </p>
      </main>
    </div>
  );
};

export default PlantDetails;
