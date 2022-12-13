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
    }
  );

  const [infoMessage, setInfoMessage] = useState({
    login: "",
    signUp: "",
    home: "",
  });

  const [userPlants, setUserPlants] = useState([]);

  //Get userPlants from API only when user id exists.
  useEffect(() => {
    if (userData.id) {
      apiUser
        .getUserPlantsFromApi(userData.id)
        .then((response) => setUserPlants(response.plants));
    }
  }, [userData.id]);

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

  const updateUserPlants = (newPlant) => {
    setUserPlants(...userPlants, newPlant);
  };

  //--Get user data
  const getUserFromApi = (userId) => {
    //console.log("Pidiendo datos de usuario");
    apiUser.getUserDataFromApi(userId).then((response) => response);
  };

  //--Get ALL plants
  const getPlantsFromApi = () => {
    apiUser.getPlantsFromApi().then((response) => response);
  };

  //--Save user plants
  const sendUserPlantsToApi = (plantId) => {
    //console.log("sending");
    if (!userPlants.find((plant) => plant.id === parseInt(plantId))) {
      apiUser
        .sendUserPlantsToApi({
          plantId: parseInt(plantId),
          userId: userData.id,
        })
        .then((response) => response);
    }
  };

  //--Get user plants
  const getUserPlantsFromApi = (userId) => {
    apiUser.getUserPlantsFromApi(userId).then((response) => response);
  };

  return (
    <div className="page">
      <Router
        userData={userData}
        updateUserData={updateUserData}
        userPlants={userPlants}
        updateUserPlants={updateUserPlants}
        infoMessage={infoMessage}
        updateInfoMessage={updateInfoMessage}
        sendLoginToApi={apiUser.sendLoginToApi}
        sendSingUpToApi={apiUser.sendSingUpToApi}
        sendUserPlantsToApi={sendUserPlantsToApi}
        getUserFromApi={getUserFromApi}
        getUserPlantsFromApi={getUserPlantsFromApi}
        getPlantsFromApi={getPlantsFromApi}
      />
    </div>
  );
}

export default App;
