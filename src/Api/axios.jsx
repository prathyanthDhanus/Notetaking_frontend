import axios from 'axios';

export  const axioss = payload => {
  const URL = `http://localhost:3000`;
  return axios(URL, {
    method: 'POST/GET',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};