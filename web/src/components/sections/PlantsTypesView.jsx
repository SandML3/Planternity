import "../../assets/styles/components/PlantsTypesView.scss";

import { useState, useEffect } from "react";

import apiPlants from "../../services/api-plants";

const PlantsTypesView = ({ updateViewSelected }) => {
  const [plantTypes, setPlantTypes] = useState([]);

  const selectView = (ev) => {
    updateViewSelected(ev.currentTarget.id);
  };

  const typesList = plantTypes.map((type) => (
    <li
      className="plantType"
      key={type.type_id}
      id={type.type}
      onClick={selectView}
    >
      <img
        className="plantType__image"
        src={require(`../../assets/images/plants_types/${type.type
          .toLowerCase()
          .split(" ")
          .join("_")}.jpg`)}
        alt={type.type}
        title={type.type}
      />
      <p className="plantType__text">{type.type}</p>
    </li>
  ));

  useEffect(() => {
    apiPlants
      .getPlantsTypes()
      .then((response) =>
        response.success ? setPlantTypes(response.plantsTypes) : null
      );
  }, []);

  return (
    <>
      <ul className="plantTypes__list" style={{ height: "1000px" }}>
        {typesList}
      </ul>
    </>
  );
};
export default PlantsTypesView;
