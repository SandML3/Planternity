import { motion } from "framer-motion";

import { useState } from "react";

const PlantItem = ({ userPlants, plant, updatePlantsData }) => {
  const [isUserPlant, setIsUserPlant] = useState(false);

  const handleClick = (ev) => {
    const newPlantId = ev.currentTarget.id;
    updatePlantsData(newPlantId);
    setIsUserPlant(
      !!userPlants.find((plant) => plant.id === parseInt(newPlantId))
    );
  };

  const Path = (props) => (
    <motion.path
      fill="trasparent"
      strokeWidth="3"
      stroke="hsla(150, 9%, 34%, 1)"
      strokeLinecap="round"
      {...props}
    />
  );
  return (
    <div onClick={handleClick} id={plant.id} title="Añadir">
      <svg className="plantList__item__icon">
        <Path
          d="M 15 12 L 15 22"
          animate={isUserPlant ? "added" : "notAdded"}
          variants={{
            notAdded: { d: "M 15 12 L 15 22" },
            added: {
              d: "M 12 12 L 20 20",
            },
          }}
          transition={{ duration: 0.25, type: "spring", stiffness: 100 }}
        />
        <Path
          d="M 10 17 L 20 17"
          animate={isUserPlant ? "added" : "notAdded"}
          variants={{
            notAdded: {
              d: "M 10 17 L 20 17",
            },
            added: {
              d: "M 20 12 L 12 20",
            },
          }}
          transition={{ duration: 0.25, type: "spring", stiffness: 100 }}
        />
      </svg>

      <div className="plantImage__container">
        <img
          src={require(`../../images/plants/${plant.image}.jpg`)}
          title={`Foto de ${plant.common_name}`}
          alt={`Foto de ${plant.common_name}`}
          className="plantImage"
        />
      </div>
      <p className="plantName">{plant.common_name}</p>
    </div>
  );
};
export default PlantItem;
