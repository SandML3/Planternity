import "../styles/App.scss";

import apiUser from "../services/api-users";
import ls from "../services/localstorage";
import Router from "../routes/Router";

import { useEffect, useState } from "react";

function App() {
  //State variables
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

  //Save in Local Storage
  useEffect(() => {
    ls.set("userData", userData);
  }, [userData]);

  //Lifting functions
  const updateUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const updateInfoMessage = (key, value) => {
    setInfoMessage({ ...infoMessage, [key]: value });
  };

  //Fetchs
  //--Login
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

  //--Sign up
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

  //--Get all plants
  const sendUserPlantsToApi = () => {
    apiUser
      .sendUserPlantsToApi({
        plants: userData.plants,
      })
      .then((response) => response);
  };

  return (
    <div className="page">
      <Router
        userData={userData}
        updateUserData={updateUserData}
        infoMessage={infoMessage}
        updateInfoMessage={updateInfoMessage}
        sendLoginToApi={sendLoginToApi}
        sendSingUpToApi={sendSingUpToApi}
        sendUserPlantsToApi={sendUserPlantsToApi}
      />
    </div>
  );
}

export default App;
