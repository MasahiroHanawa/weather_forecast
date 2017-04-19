import axios from 'axios';

const apiClient = () => {
  return axios.create ( {
    baseURL: API_URL,
    timeout: 100000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      'xhrFields':{
        'withCredentials': 'true'
      }
    }
  });
};

export default apiClient;
