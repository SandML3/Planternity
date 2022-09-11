import '../styles/Home.scss';

import LandingHeader from './HomeComponents/LandingHeader';
import LandingSlider from './HomeComponents/LandingSlider';

const Home = (props) => {


  return <>
      <LandingHeader/>
      <main className='main'>
        <LandingSlider/>
        <button className='landing__start__button'>Comenzar</button>
      </main>
  </>
};
export default Home;