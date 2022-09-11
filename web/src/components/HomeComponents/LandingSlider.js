import '../../styles/LandingSlider.scss';

import dataSliderItem from '../../data/sliders_items.json';

// import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import SliderItem from './SliderItem';
import { useState } from 'react';
import ButtonSlider from './ButtonSlider';



const LandingSlider = (props) => {

  const [slideItem, setSlideItem] = useState(0);

  //Arrows logic.
  const nextSlide = () => {
    slideItem !== -435
      ?setSlideItem(slideItem - 435 )
      :setSlideItem(slideItem + 435);
  };

  const prevSlide = () => {
    slideItem === -435 ||  slideItem !== 0
      ?setSlideItem(slideItem + 435 )
      :setSlideItem(slideItem -435);
  };


  //Slider items render.
  const slidersItems = dataSliderItem.map((item, index) => <motion.div className='item' key={index}>
        <SliderItem  title={item.title} text={item.text} />
    </motion.div>
  );


  //Dots render.
  const displayElement = slideItem === 0 ?0 :1;

  const dots = dataSliderItem.map(((item,index) => <div key={index} className={displayElement ===index ?'dot-active dot' :'dot'}></div>));



  return <motion.div className="slider-container">
        <motion.div className='slider' drag='x' dragConstraints={{right: 0, left:-435}} animate={{x : slideItem }}>

            {slidersItems}

        </motion.div>
        <ButtonSlider moveSlide={nextSlide} direction='next'/>
        <ButtonSlider moveSlide={prevSlide}  direction='prev'/>

        <div className='dots__container'>
           {dots}
        </div>
    </motion.div>
};

export default LandingSlider;