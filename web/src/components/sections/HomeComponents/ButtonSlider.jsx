import leftArrow from "../../../assets/images/icons/arrow-left.svg";
import rightArrow from "../../../assets/images/icons/arrow-right.svg";

import "../../../assets/styles/components/ButtonSlide.scss";

const ButtonSlider = ({ moveSlide, direction }) => {
  return (
    <button
      className={
        direction === "next" ? "button__slide next" : "button__slide prev"
      }
      onClick={moveSlide}
    >
      <img
        className="button"
        src={direction === "next" ? rightArrow : leftArrow}
        title={direction === "next" ? "Siguiente slider" : "Slider anterior"}
        alt={
          direction === "next"
            ? "Flecha hacia la derecha"
            : "Flecha hacia la izquierda"
        }
      />
    </button>
  );
};
export default ButtonSlider;
