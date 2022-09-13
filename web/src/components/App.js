import '../styles/App.scss';
// import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import { useState } from 'react';

import apiUser from '../services/api-users';
import UserProfile from './UserProfile';
import SignUpPage from './SignUpPage';



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


  const [infoMessage, setInfoMessage] = useState({
    login: '',
    signUp: ''
  });

  const updateUserData = (key, value) => {
    setUserData({...userData, [key]:value })
  }

  const  sendLoginToApi = () => {
    apiUser.sendLoginToApi({ 
    email: userData.email, 
    password: userData.password }).then(response => {
      response.success
       ?setUserData({...userData, id: response.userId})  
       :setInfoMessage({...infoMessage, login:response.errorMessage})
    });
  };

  const sendSingUpToApi = () => {
    apiUser.sendSingUpToApi({ 
      name: userData.name,
      email: userData.email, 
      password: userData.password }).then(response => {
        response.success
          ?window.location.href=`/user/${response.userId}`
          :setInfoMessage({...infoMessage, signUp:response.errorMessage})
      })
      };

  //-------------------------------FALTA REDIRECCIONAR AL USUARIO CUANDO SE PRODUCE EL INICIO DE SESIÓN.


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
          loginMessage={infoMessage.login}
          />}
        />

        <Route path='/sign-up' element={<SignUpPage userData={userData} 
          updateUserData={updateUserData} 
          sendSingUpToApi={sendSingUpToApi}
          loginMessage={infoMessage.signUp}/>}/>

        <Route 
        path='/user/:userId' 
        element={<UserProfile 
          userData={userData} 
          // updateUserData={updateUserData} 
          // sendLoginToApi={sendLoginToApi}
          // loginMessage={loginMessage}
          />}
        />

      </Routes>
    </div>
  );
};

export default App;
