import axios from 'axios';

const apiClient = () => {
  const apiInfo = axios.create({
    baseURL: API_URL,
    timeout: 100000,
    headers: {
      xhrFields: {
        withCredentials: 'true',
      },
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  });
  return apiInfo;
};

export default apiClient;
