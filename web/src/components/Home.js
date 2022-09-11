import { Link } from 'react-router-dom';
import '../styles/Home.scss';

import LandingHeader from './HomeComponents/LandingHeader';
import LandingSlider from './HomeComponents/LandingSlider';

const Home = ({ isUserLogged }) => {


  return <>
      <LandingHeader isUserLogged={isUserLogged} />
      <main className='main'>
        <LandingSlider/>
        <Link to='' className='landing__start__button link'>Comenzar</Link>
      </main>
  </>
};
export default Home;