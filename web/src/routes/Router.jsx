import { Route, Routes } from "react-router-dom";

import Home from "../components/views/Home";
import LoginPage from "../components/views/LoginPage";
import UserProfile from "../components/views/UserProfile";
import SignUpPage from "../components/views/SignUpPage";
import ExplorePlants from "../components/views/ExplorePlants";

const Router = ({
  userData,
  updateUserData,
  userPlants,
  updateUserPlants,
  allPlants,
  infoMessage,
  updateInfoMessage,
  sendLoginToApi,
  sendSingUpToApi,
  sendUserPlantsToApi,
  getUserFromApi,
  getPlantsFromApi,
  getUserPlantsFromApi,
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
            getUserFromApi={getUserFromApi}
            getUserPlantsFromApi={getUserPlantsFromApi}
            userPlants={userPlants}
            allPlants={allPlants}
            updateUserPlants={updateUserPlants}
          />
        }
      />
      <Route
        path="/user/:userId/plants"
        element={
          <ExplorePlants
            allPlants={allPlants}
            sendUserPlantsToApi={sendUserPlantsToApi}
            updateUserPlants={updateUserPlants}
          />
        }
      />

      <Route path="/plant/:plantId" element={"Detalle planta"} />
    </Routes>
  );
};

export default Router;
