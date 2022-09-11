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
        
       

        
        {/* <ul className='main__list'>
            <li className='main__links__item' >
              Busca tu plantita
              </li>
            <li className='main__links__item' >
              Añadela a tu lista
              </li>
            <li className='main__links__item' >
              Aprende sobre ella
              </li>
          </ul>  */}

         {/* <nav >
          <ul className='main__links'>
            <li className='list__item' >
              <Link to='' className='main__link link'>Mis plantas</Link>
              </li>
            <li className='header__links__item' >
              <Link to='' className='header__links__item__link link--search link'>Buscar</Link>
              </li>
            <li className='header__links__item' >
              <Link to='' className='header__links__item__link link--learn
              link'>Aprender</Link>
              </li>
          </ul> */}

        {/* </nav> */}

       
      </main>

    </div>
  );
}

export default App;
