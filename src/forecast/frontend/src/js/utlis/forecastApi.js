import axios from 'axios';

const forecastApiClient = () => {
  return axios.create ( {
    baseURL: FORECAST_API_URL,
    timeout: 100000
  });
};

export default forecastApiClient;
