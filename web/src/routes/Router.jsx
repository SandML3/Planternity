import { Route, Routes } from "react-router-dom";

import Home from "../components/views/Home";
import LoginPage from "../components/views/LoginPage";
import UserProfile from "../components/views/UserProfile";
import SignUpPage from "../components/views/SignUpPage";
import ExplorePlants from "../components/views/ExplorePlants";
import PlantDetails from "../components/views/PlantDetails";

const Router = ({
  userData,
  updateUserData,
  userPlants,
  updateUserPlants,
  infoMessage,
  updateInfoMessage,
  sendLoginToApi,
  sendSingUpToApi,
  sendUserPlantsToApi,
  getUserDataFromApi,
  getUserPlantsFromApi,
  getPlantsFromApi,
  saveInLocalStorage,
}) => {
  return (
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
            updateInfoMessage={updateInfoMessage}
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
            updateInfoMessage={updateInfoMessage}
          />
        }
      />

      <Route
        path="/user/:userId"
        element={
          <UserProfile
            userData={userData}
            updateUserData={updateUserData}
            getUserDataFromApi={getUserDataFromApi}
            saveInLocalStorage={saveInLocalStorage}
            userPlants={userPlants}
            updateUserPlants={updateUserPlants}
            getUserPlantsFromApi={getUserPlantsFromApi}
          />
        }
      />
      <Route
        path="/plants"
        element={
          <ExplorePlants
            userData={userData}
            sendUserPlantsToApi={sendUserPlantsToApi}
            updateUserData={updateUserData}
            userPlants={userPlants}
            getPlantsFromApi={getPlantsFromApi}
            updateUserPlants={updateUserPlants}
          />
        }
      />

      <Route
        path="/user/:userId/plant/:plantId"
        element={<PlantDetails userPlants={userPlants} />}
      />
    </Routes>
  );
};

export default Router;
