import axios from 'axios';

const forecastApiClient = () => {
  const apiInfo = axios.create({
    baseURL: FORECAST_API_URL,
    timeout: 100000,
  });
  return apiInfo;
};

export default forecastApiClient;
