import '../styles/App.scss';
// import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import { useState } from 'react';

import apiUser from '../services/api-users';



function App() {

//Routes config.
  // const { pathname } = useLocation();

  // const dataPath = matchPath('plant/:plantId', pathname)
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    plants: []
  });

  const [loginMessage, setLoginMessage] = useState('');

  const updateUserData = (key, value) => {
    setUserData({...userData, [key]:value })
  }

  const  sendLoginToApi = () => {
    apiUser.sendLoginToApi({ 
    email: userData.email, 
    password: userData.password }).then(response => {
      response.success
       ?setUserData({...userData, id: response.userId})  
       :setLoginMessage(response.errorMessage)
       
    })

    
      
  };


  return (
    <div className='page'>
      
      <Routes>
        <Route 
        path='/' 
        element={<Home isUserLogged={!!userData.id}/>}
        />

        <Route 
        path='/login' 
        element={<LoginPage 
          userData={userData} 
          updateUserData={updateUserData} 
          sendLoginToApi={sendLoginToApi}
          loginMessage={loginMessage}
          />}
        />


        <Route path='/sign-up' element={'sign up'}/>

      </Routes>
    </div>
  );
};

export default App;
