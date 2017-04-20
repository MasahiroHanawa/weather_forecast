import { SEARCH, SEARCH_NOT_FOUND } from '../constants';
import apiClient from '../utlis/api';
import forecastApiClient from '../utlis/forecastApi';

export default function search(token) {
  return (dispatch) => {
    apiClient().get(`/api/v1/city/?token=${token}`)
      .then((apiResponse) => {
        forecastApiClient().get(`/data/2.5/forecast/daily?id=${apiResponse.data.data.city_id}&units=metric&cnt=6&appid=${APP_ID}`)
          .then((forecastApiResponse) => {
            dispatch({
              type: SEARCH,
              forecastData: forecastApiResponse.data,
            });
          })
          .catch((forecastApiResponse) => {
            dispatch({
              type: SEARCH_NOT_FOUND,
              forecastData: forecastApiResponse.data,
            });
            console.log(forecastApiResponse);
          });
      })
      .catch((apiResponse) => {
        dispatch({
          type: SEARCH_NOT_FOUND,
          forecastData: apiResponse.data,
        });
        console.log(apiResponse);
      });
  };
}
