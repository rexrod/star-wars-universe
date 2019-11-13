const HTTPS = 'https://';
const URI = 'swapi.co/api/';


export const environment = {
  production: false,
  origin: {
    path: HTTPS + URI,
  },
  timeout: 30000
};
