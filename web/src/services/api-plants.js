// --save user plants.
const sendUserPlantsToApi = (data) => {
  //console.log("Se están enviando datos al profile:", data);
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

// --get user plants.
const getPlantsTypes = () => {
  //console.log("Se están pidiendo los tipos de plantas");
  return fetch(`//localhost:4000/api/plants/types`)
    .then((response) => response.json())
    .then((data) => {
      const result = {
        success: true,
        plantsTypes: data,
      };
      return result;
    });
};

const objToExport = {
  sendUserPlantsToApi: sendUserPlantsToApi,
  getUserPlantsFromApi: getUserPlantsFromApi,
  getPlantsFromApi: getPlantsFromApi,
  getPlantsTypes: getPlantsTypes,
};

export default objToExport;
