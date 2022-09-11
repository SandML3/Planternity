import '../styles/App.scss';
// import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';


function App() {

//Routes config.
  // const { pathname } = useLocation();

  // const dataPath = matchPath('plant/:plantId', pathname)


  return (
    <div className='page'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={'sign up'}/>

      </Routes>
    </div>
  );
}

export default App;
