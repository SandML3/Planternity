import "../styles/App.scss";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import apiUser from "../services/api-users";
import ls from "../services/localstorage";

import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import UserProfile from "./views/UserProfile";
import SignUpPage from "./views/SignUpPage";

function App() {
  //Routes config.
  // const { pathname } = useLocation();

  // const dataPath = matchPath('plant/:plantId', pathname)
  const [userData, setUserData] = useState(
    ls.get("userData") || {
      id: "",
      name: "",
      email: "",
      password: "",
      plants: [],
    }
  );

  const [infoMessage, setInfoMessage] = useState({
    login: "",
    signUp: "",
    home: "",
  });

  useEffect(() => {
    ls.set("userData", userData);
  }, [userData]);

  //Function for lifting

  const updateUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const updateInfoMessage = (key, value) => {
    setInfoMessage({ ...infoMessage, [key]: value });
  };

  const sendLoginToApi = () => {
    apiUser
      .sendLoginToApi({
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        setUserData({ ...userData, id: response.userId || "" });
        response.success
          ? (window.location.href = `/user/${response.userId}`)
          : setInfoMessage({ ...infoMessage, login: response.errorMessage });
      });
  };

  const sendSingUpToApi = () => {
    apiUser
      .sendSingUpToApi({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        setUserData({ ...userData, id: response.userId || "" });
        response.success
          ? (window.location.href = `/user/${response.userId}`)
          : setInfoMessage({ ...infoMessage, signUp: response.errorMessage });
      });
  };

  const sendUserPlantsToApi = () => {
    apiUser
      .sendUserPlantsToApi({
        plants: userData.plants,
      })
      .then((response) => response);
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              id={userData.id}
              updateUserData={updateUserData}
              infoMessage={infoMessage.home}
              updateInfoMessage={updateInfoMessage}
            />
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage
              userData={userData}
              updateUserData={updateUserData}
              sendLoginToApi={sendLoginToApi}
              loginMessage={infoMessage.login}
            />
          }
        />

        <Route
          path="/sign-up"
          element={
            <SignUpPage
              userData={userData}
              updateUserData={updateUserData}
              sendSingUpToApi={sendSingUpToApi}
              signUpMessage={infoMessage.signUp}
            />
          }
        />

        <Route
          path="/user/:userId"
          element={
            <UserProfile
              userData={userData}
              updateUserData={updateUserData}
              sendUserPlantsToApi={sendUserPlantsToApi}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
