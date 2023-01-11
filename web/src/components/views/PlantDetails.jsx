import "../../assets/styles/components/PlantDetails.scss";

import { useParams } from "react-router-dom";

const PlantDetails = ({ userPlants }) => {
  const plantId = useParams().plantId;
  const plant = userPlants.find((plant) => plant.id === parseInt(plantId));

  return (
    <div className="plantDetail">
      <header className="plantDetail__header">
        <h2 className="plantDetail__header__title">{plant.scientific_name}</h2>
        <h3 className="plantDetail__header__subtitle">{plant.common_name}.</h3>
      </header>

      <main className="plantDetail__main">
        <section className="plantDetail__main__info">
          <div
            className="plantDetail__main__img"
            style={{
              backgroundImage: `url("${require(`../../assets/images/plants/${plant.image}.jpg`)}")`,
            }}
          ></div>

          <div className="plantDetail__main__table">
            <h4 className="plantDetail__main__table__title">Familia: </h4>
            <p className="plantDetail__main__table__text">{plant.family}</p>
            <h4 className="plantDetail__main__table__title">Género:</h4>
            <p className="plantDetail__main__table__text">{plant.genus}</p>
            <h4 className="plantDetail__main__table__title">Origen:</h4>
            <p className="plantDetail__main__table__text">{plant.origin}</p>
            <h4 className="plantDetail__main__table__title">Ph:</h4>
            <p className="plantDetail__main__table__text">{plant.soil_ph}</p>
            <h4 className="plantDetail__main__table__title">Toxicidad:</h4>
            <p className="plantDetail__main__table__text">
              {plant.toxicity === "true" ? "Sí" : "Childs and pet friendly"}
            </p>
          </div>
        </section>

        <p className="plantDetail__main__text">{plant.description}</p>

        <h4 className="plantDetail__main__title">Luz</h4>
        <p className="plantDetail__main__text">{plant.light_conditions}</p>

        <h4 className="plantDetail__main__title">Sustrato</h4>
        <p className="plantDetail__main__text">{plant.soil_type}</p>

        <h4 className="plantDetail__main__title">Temperatura</h4>
        <p className="plantDetail__main__text">{plant.temperature}</p>

        <h4 className="plantDetail__main__title">Humedad</h4>
        <p className="plantDetail__main__text">{plant.humidity}</p>

        <h4 className="plantDetail__main__title">Riego</h4>
        <p className="plantDetail__main__text">{plant.water_requirements}</p>

        <h4 className="plantDetail__main__title">Transplante</h4>
        <p className="plantDetail__main__text">{plant.potting}</p>

        <h4 className="plantDetail__main__title">Propagación</h4>
        <p className="plantDetail__main__text">{plant.propagation}</p>

        <h4 className="plantDetail__main__title">Curiosidades</h4>
        <p className="plantDetail__main__text">{plant.curiosities}</p>
      </main>
    </div>
  );
};

export default PlantDetails;
