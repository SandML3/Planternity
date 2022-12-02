// login
const sendLoginToApi = data => {
    console.log('Se están enviando datos al login:', data);

    const bodyParams = {
      email: data.email,
      password: data.password
    };

    return fetch('//localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyParams)
    })
      .then(response => response.json())
      .then(response => response);
  };



  // signup
  const sendSingUpToApi = data => {
    console.log('Se están enviando datos al signup:', data);

    return fetch('//localhost:4000/api/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => data)
  };
 
  

  //plants
  
  const sendUserPlantsToApi = (data) => {
    console.log('Se están enviando datos al profile:', data);
    
    return fetch('//localhost:4000/api/user/:userId', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  };
  
  
  const getUserPlantsFromApi = () => {
    console.log('Se están pidiendo datos de las plantas del usuario');
    
    return fetch('//localhost:4000/api/plants')
      .then(response => response.json())
      .then((data) => {
        const result = {
          success: true,
          plants: data
        };
        return result;
      });
  };
  
  const objToExport = {
    sendLoginToApi: sendLoginToApi,
    sendSingUpToApi: sendSingUpToApi,
    sendUserPlantsToApi: sendUserPlantsToApi,
    getUserPlantsFromApi: getUserPlantsFromApi,
  };
  
  export default objToExport;