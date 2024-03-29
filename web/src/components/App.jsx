import "../assets/styles/App.scss";

import apiUser from "../services/api-users";
import apiPlants from "../services/api-plants";
import ls from "../services/localstorage";
import Router from "../routes/Router";

import { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const userPath = matchPath("/user/:userId", pathname);
  const paramsUserId = userPath ? userPath.params.userId : null;

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

  //Save in Local Storage
  useEffect(() => {
    ls.set("userData", userData);
    ls.set("userPlants", userPlants);
  }, [userData, userPlants]);

  useEffect(() => {
    if (paramsUserId && Object.values(userData).some((value) => value === "")) {
      apiUser.getUserDataFromApi(paramsUserId).then((response) => {
        if (response.success) {
          setUserData(response.userData);
        }
      });
    }

    if (userPlants.length === 0) {
      apiPlants.getUserPlantsFromApi(paramsUserId).then((response) => {
        setUserPlants(response.plants);
      });
    }
  }, [paramsUserId, userData, userPlants.length]);

  //Lifting functions
  const updateUserData = (key, value) => {
    //console.log(key, value);
    setUserData({ ...userData, [key]: value });
  };

  const updateInfoMessage = (key, value) => {
    setInfoMessage({ ...infoMessage, [key]: value });
  };

  const addUserPlant = (plant) => {
    setUserPlants([...userPlants, plant]);
  };

  const deleteUserPlant = (plantId) => {
    const plantIndex = userPlants.findIndex(
      (userPlant) => userPlant.id === parseInt(plantId)
    );
    userPlants.splice(plantIndex, 1);
    setUserPlants([...userPlants]);
  };

  //--Save user plants
  const sendUserPlantsToApi = (plantId) => {
    apiPlants
      .sendUserPlantsToApi({
        plantId: parseInt(plantId),
        userId: userData.id,
      })
      .then((response) => response);

    // if (!userPlants.find((plant) => plant.id === parseInt(plantId))) {
    //   apiPlants
    //     .sendUserPlantsToApi({
    //       plantId: parseInt(plantId),
    //       userId: userData.id,
    //     })
    //     .then((response) => response);
    // }
  };

  const resetAllUserInfo = () => {
    setUserData({
      id: "",
      name: "",
      email: "",
      password: "",
    });
    setUserPlants([]);
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
        //
        addUserPlant={addUserPlant}
        deleteUserPlant={deleteUserPlant}
        //
        resetAllUserInfo={resetAllUserInfo}
        infoMessage={infoMessage}
        updateInfoMessage={updateInfoMessage}
        sendLoginToApi={apiUser.sendLoginToApi}
        sendSingUpToApi={apiUser.sendSingUpToApi}
        sendUserPlantsToApi={sendUserPlantsToApi}
        getUserDataFromApi={apiUser.getUserDataFromApi}
        getUserPlantsFromApi={apiPlants.getUserPlantsFromApi}
        getPlantsFromApi={apiPlants.getPlantsFromApi}
        saveInLocalStorage={ls.set}
      />
    </div>
  );
}

export default App;
