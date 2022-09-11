import '../styles/App.scss';
import { useState, useEffect } from 'react';



import LandingHeader from './LandingHeader';
import LandingSlider from './LandingSlider';


function App() {

//Routes config.
  // const { pathname } = useLocation();

  // const dataPath = matchPath('plant/:plantId', pathname)


  return (
    <div className='page'>
      
      <LandingHeader/>

      <main className='main'>

        <LandingSlider/>

        <button className='landing__start__button'>Comenzar</button>
           
      </main>

    </div>
  );
}

export default App;
