import "../../../assets/styles/components/LandingSlider.scss";

import dataSliderItem from "../../../data/sliders_items.json";

import { motion } from "framer-motion";
import SliderItem from "./SliderItem";
import { useEffect, useRef, useState } from "react";
import ButtonSlider from "./ButtonSlider";

const LandingSlider = (props) => {
  const [slideItem, setSlideItem] = useState(0);

  //Rigth now, when the user resizes the window, the slider function don't work correctly because of the offsetWidth is the same until the user manually reloads the page. Perhaps it would be interesting save this in a state variable.
  const sliderWidthRef = useRef();

  useEffect(() => {
    sliderWidthRef.current =
      document.querySelector(".slider-container").offsetWidth;
  });

  //Arrows logic.
  const nextSlide = () =>
    slideItem !== -sliderWidthRef.current * 1.01
      ? setSlideItem(slideItem - sliderWidthRef.current * 1.01)
      : setSlideItem(slideItem + sliderWidthRef.current * 1.01);

  const prevSlide = () => {
    slideItem === -sliderWidthRef.current * 1.01 || slideItem !== 0
      ? setSlideItem(slideItem + sliderWidthRef.current * 1.01)
      : setSlideItem(slideItem - sliderWidthRef.current * 1.01);
  };

  //Slider items render.
  const slidersItems = dataSliderItem.map((item, index) => (
    <motion.div className="item" key={index}>
      <SliderItem title={item.title} text={item.text} />
    </motion.div>
  ));

  //Dots render.
  const displayElement = slideItem === 0 ? 0 : 1;

  const dots = dataSliderItem.map((item, index) => (
    <div
      key={index}
      className={displayElement === index ? "dot-active dot" : "dot"}
    ></div>
  ));

  return (
    <div className="slider-container">
      <div className="slider-container__wrapper">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: sliderWidthRef.current * -1 }}
          animate={{ x: slideItem }}
        >
          {slidersItems}
        </motion.div>
        <ButtonSlider moveSlide={prevSlide} direction="prev" />
        <ButtonSlider moveSlide={nextSlide} direction="next" />
      </div>

      <div className="dots__container">{dots}</div>
    </div>
  );
};

export default LandingSlider;
