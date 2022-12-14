import "../../styles/components/ExplorePlants.scss";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import InputText from "../commons/InputText";

const ExplorePlants = ({
  sendUserPlantsToApi,
  getPlantsFromApi,
  userPlants,
}) => {
  const [allPlants, setAllPlants] = useState([]);
  const [filterPlants, setFilterPlants] = useState({ name: "" });
  const [added, setAdded] = useState(false);

  useEffect(() => {
    getPlantsFromApi().then((response) => setAllPlants(response.plants));
  }, [getPlantsFromApi]);

  const updateFilterPlants = (key, value) => {
    setFilterPlants({ ...filterPlants, [key]: value });
  };

  const handleClick = (ev) => {
    const newPlant = ev.currentTarget.id;
    sendUserPlantsToApi(newPlant);
    setAdded(!!userPlants.find((plant) => plant.id === parseInt(newPlant)));
  };

  const userId = useParams().userId;

  const Path = (props) => (
    <motion.path
      fill="trasparent"
      strokeWidth="3"
      stroke="hsla(150, 9%, 34%, 1)"
      strokeLinecap="round"
      {...props}
    />
  );

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
        <div onClick={handleClick} id={plant.id}>
          <svg className="plantList__item__icon">
            <Path
              d="M 12 12 L 20 20"
              animate={added ? "added" : "notAdded"}
              variants={{
                notAdded: { x: [0, 0, 0], y: [0, 0, 0], d: "M 12 12 L 20 20" },
                added: {
                  x: [0, 100, 30],
                  y: [0, 10, 0],
                  d: "M 12 12 L 20 20",
                },
              }}
              transition={{ duration: 0.75 }}
            />
            <Path
              d="M 20 12 L 12 20"
              variants={{
                notAdded: {
                  x: [0, 0, 0],
                  y: [0, 0, 0],
                  d: "M 20 12 L 12 20",
                },
                added: {
                  x: [0, 0, 0],
                  y: [0, 0, 0],
                  d: "M 20 12 L 12 20",
                },
              }}
              transition={{ duration: 0.75 }}
            />
          </svg>
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
