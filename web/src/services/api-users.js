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

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSingUpToApi: sendSingUpToApi,
  getUserDataFromApi: getUserDataFromApi,
};

export default objToExport;
