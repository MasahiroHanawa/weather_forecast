import { SEARCH, SEARCH_NOT_FOUND } from '../constants';
import apiClient from '../utlis/api';
import forecastApiClient from '../utlis/forecastApi';

export function search(token) {
  let data = null;
  return dispatch => {
    apiClient().get('/api/v1/city/?token=' + token)
      .then((response) => {
        forecastApiClient().get('/data/2.5/forecast/daily?id=' + response.data.data.city_id + '&units=metric&cnt=6&appid=' + APP_ID)
          .then((response) => {
            dispatch({
              type: SEARCH,
              forecastData: response.data
            });
          })
          .catch((response) => {
            dispatch({
              type: SEARCH_NOT_FOUND,
              forecastData: response.data
            });
            console.log(response);
          });
      })
      .catch((response) => {
        dispatch({
          type: SEARCH_NOT_FOUND,
          forecastData: response.data
        });
        console.log(response);
      });
  };
}
