// login
const sendLoginToApi = (data) => {
  console.log("Se están enviando datos al login:", data);

  const bodyParams = {
    email: data.email,
    password: data.password,
  };

  return fetch("//localhost:4000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyParams),
  })
    .then((response) => response.json())
    .then((response) => response);
};

// signup
const sendSingUpToApi = (data) => {
  console.log("Se están enviando datos al signup:", data);

  return fetch("//localhost:4000/api/sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data);
};

//--get user info.
const getUserDataFromApi = (userId) => {
  return fetch(`//localhost:4000/api/user/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      const result = {
        success: true,
        userData: data,
      };

      return result;
    });
};

//plants
//--save user plants.
const sendUserPlantsToApi = (data) => {
  console.log("Se están enviando datos al profile:", data);

  return fetch("//localhost:4000/api/user-plants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const result =
        data.changes === 1 ? { success: true } : { success: false };
      return result;
    });
};

// --get all plants.
const getPlantsFromApi = () => {
  //console.log("Se están pidiendo datos de todas las plantas");

  return fetch("//localhost:4000/api/plants")
    .then((response) => response.json())
    .then((data) => {
      const result = {
        success: true,
        plants: data,
      };
      //console.log(result);
      return result;
    });
};

// --get user plants.
const getUserPlantsFromApi = (userId) => {
  //console.log("Se están pidiendo datos de las plantas del usuario", userId);

  return fetch(`//localhost:4000/api/user/${userId}/plants`)
    .then((response) => response.json())
    .then((data) => {
      const result = {
        success: true,
        plants: data,
      };

      return result;
    });
};

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSingUpToApi: sendSingUpToApi,
  sendUserPlantsToApi: sendUserPlantsToApi,
  getUserPlantsFromApi: getUserPlantsFromApi,
  getUserDataFromApi: getUserDataFromApi,
  getPlantsFromApi: getPlantsFromApi,
};

export default objToExport;
