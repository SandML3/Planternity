import "../../styles/components/ExplorePlants.scss";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ExplorePlants = ({ sendUserPlantsToApi, getPlantsFromApi }) => {
  const [allPlants, setAllPlants] = useState([]);
  const [filterPlants, setFilterPlants] = useState("");

  useEffect(() => {
    getPlantsFromApi().then((response) => setAllPlants(response.plants));
  }, [getPlantsFromApi]);

  const handleClick = (ev) => {
    const newPlant = ev.currentTarget.id;
    sendUserPlantsToApi(newPlant);
  };

  const userId = useParams().userId;

  const handleWrite = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };

  const handleChange = (ev) => {
    setFilterPlants(ev.target.value);
  };

  const plantsList = allPlants
    .filter(
      (plant) =>
        plant.common_name.toLowerCase().includes(filterPlants.toLowerCase()) ||
        plant.scientific_name.toLowerCase().includes(filterPlants.toLowerCase())
    )
    .map((plant, index) => (
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

  return (
    <div className="explorePlants">
      {" "}
      <header className="explorePlants__header">
        <nav className="explorePlants__header__nav">
          <Link
            to={`/user/${userId}`}
            className="link explorePlants__header__link"
          >
            Volver
          </Link>
        </nav>
        <form className="link explorePlants__header__form">
          <input
            className="explorePlants__header__filter"
            type="text"
            name="name"
            id="name"
            value={filterPlants}
            onChange={handleChange}
            onKeyDown={handleWrite}
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
