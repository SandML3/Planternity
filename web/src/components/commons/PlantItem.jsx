import "../../assets/styles/components/PlantItem.scss";

import { motion } from "framer-motion";

const PlantItem = ({ plant, updatePlantsData, iconState }) => {
  const handleClick = (ev) => {
    const plantId = ev.currentTarget.id;

    if (!iconState) {
      updatePlantsData("add", plantId);
    } else {
      updatePlantsData("delete", plantId);
    }
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
    <div
      onClick={handleClick}
      id={plant.id}
      title={iconState ? "Eliminar" : "Añadir"}
    >
      <svg className={iconState ? "plantItem__icon--added" : "plantItem__icon"}>
        <Path
          d={iconState ? "M 12 12 L 20 20" : "M 15 12 L 15 22"}
          animate={iconState ? "added" : "notAdded"}
          variants={{
            notAdded: { d: "M 15 12 L 15 22" },
            added: {
              d: "M 12 12 L 20 20",
            },
          }}
          transition={{ duration: 0.25, type: "spring", stiffness: 100 }}
        />
        <Path
          d={iconState ? "M 20 12 L 12 20" : "M 10 17 L 20 17"}
          animate={iconState ? "added" : "notAdded"}
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

      {/* <div
        className={
          iconState ? "plantImage__container--added" : "plantImage__container"
        }
      >
        <img
          src={require(`../../assets/images/plants/${plant.image}.jpg`)}
          title={`Foto de ${plant.common_name}`}
          alt={`Foto de ${plant.common_name}`}
          className="plantImage"
        />
      </div> */}

      <div
        className={
          iconState
            ? "plantItem__imageWrapper--added"
            : "plantItem__imageWrapper"
        }
      >
        <img
          src={require(`../../assets/images/plants/${plant.image}.jpg`)}
          title={`Foto de ${plant.common_name.split(",")[0]}`}
          alt={`Foto de ${plant.common_name.split(",")[0]}`}
          className="plantItem__image"
        />
      </div>
      <p className="plantItem__name">{plant.common_name.split(",")[0]}</p>
    </div>
  );
};
export default PlantItem;
