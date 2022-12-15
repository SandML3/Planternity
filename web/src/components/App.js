import "../styles/App.scss";

import apiUser from "../services/api-users";
import apiPlants from "../services/api-plants";
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

  const [userPlants, setUserPlants] = useState(ls.get("userPlants") || []);

  const [infoMessage, setInfoMessage] = useState({
    login: "",
    signUp: "",
    home: "",
  });

  //Get userPlants from API only when user id exists.
  useEffect(() => {
    if (userData.id && userPlants.length === 0) {
      apiPlants.getUserPlantsFromApi(userData.id).then((response) => {
        setUserPlants(response.plants);
      });
    }
  }, [userData.id, userPlants.length]);

  //Save in Local Storage
  useEffect(() => {
    ls.set("userData", userData);
    ls.set("userPlants", userPlants);
  }, [userData, userPlants]);

  // useEffect(() => {
  //   if (!userData.id) {
  //     //window.location.href = `/`;
  //   }
  // }, [userData.id]);

  //Lifting functions
  const updateUserData = (key, value) => {
    console.log(key, value);
    setUserData({ ...userData, [key]: value });
  };

  const updateInfoMessage = (key, value) => {
    setInfoMessage({ ...infoMessage, [key]: value });
  };

  const updateUserPlants = (newUserPlant) => {
    setUserPlants([...userPlants, newUserPlant]);
  };

  //--Save user plants
  const sendUserPlantsToApi = (plantId) => {
    //console.log("sending");

    if (!userPlants.find((plant) => plant.id === parseInt(plantId))) {
      apiPlants
        .sendUserPlantsToApi({
          plantId: parseInt(plantId),
          userId: userData.id,
        })
        .then((response) => response);
    }
  };

  //--Get user plants
  // const getUserPlantsFromApi = (userId) => {
  //   apiPlants.getUserPlantsFromApi(userId).then((response) => response);
  // };

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
        getUserDataFromApi={apiUser.getUserDataFromApi}
        //getUserPlantsFromApi={apiPlants.getUserPlantsFromApi}
        getPlantsFromApi={apiPlants.getPlantsFromApi}
        saveInLocalStorage={ls.set}
      />
    </div>
  );
}

export default App;
