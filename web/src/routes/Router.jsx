import { Route, Routes } from "react-router-dom";

import Home from "../components/views/Home";
import LoginPage from "../components/views/LoginPage";
import UserProfile from "../components/views/UserProfile";
import SignUpPage from "../components/views/SignUpPage";
import ExplorePlants from "../components/views/ExplorePlants";

const Router = ({
  userData,
  updateUserData,
  infoMessage,
  updateInfoMessage,
  sendLoginToApi,
  sendSingUpToApi,
  sendUserPlantsToApi,
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
      <Route path="/plants" element={<ExplorePlants />} />
    </Routes>
  );
};

export default Router;
