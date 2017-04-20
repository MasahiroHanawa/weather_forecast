import { SEARCH, SEARCH_NOT_FOUND } from '../constants';

const initialState = {
  id: null,
  name: null,
  country: null,
  coord: {
    lon: null,
    lat: null,
  },
  cnt: null,
  cod: null,
  list: [],
  result: false,
  chartData: {
    labels: [],
    datasets: [
      {
        label: 'Max temperature',
        fill: false,
        lineTension: 0.1,
        strokeColor: 'rgba(255, 0, 0, 0.5)',
        fillColor: 'rgba(255,255,255,0)',
        pointColor: 'rgba(255, 0, 0, 1)',
        pointStrokeColor: 'rgba(255, 0, 0, 1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
      {
        label: 'Min temperature',
        fill: false,
        lineTension: 0.1,
        strokeColor: 'rgba(0, 0, 255, 0.3)',
        fillColor: 'rgba(255,255,255,0)',
        pointColor: 'rgba(0, 0, 255, 0.8)',
        pointStrokeColor: 'rgba(0, 0, 255, 0.8)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ],
  },
};

export default function search(state = initialState, action) {
  if (action.type === SEARCH) {
    const weekDayList = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];
    let dt = null;
    const labels = [];
    const maxTemp = [];
    const minTemp = [];
    Object.keys(action.forecastData.list).forEach((key) => {
      dt = new Date(action.forecastData.list[key].dt * 1000);
      labels.push(weekDayList[dt.getDay()]);
      maxTemp.push(action.forecastData.list[key].temp.max);
      minTemp.push(action.forecastData.list[key].temp.min);
    });
    return {
      name: action.forecastData.city.name,
      country: action.forecastData.city.country,
      coord: action.forecastData.city.coord,
      cnt: action.forecastData.cnt,
      cod: action.forecastData.cod,
      list: action.forecastData.list,
      result: true,
      chartData: {
        labels,
        datasets: [
          {
            label: state.chartData.datasets[0].label,
            fill: state.chartData.datasets[0].fill,
            lineTension: state.chartData.datasets[0].lineTension,
            strokeColor: state.chartData.datasets[0].strokeColor,
            fillColor: state.chartData.datasets[0].fillColor,
            pointColor: state.chartData.datasets[0].pointColor,
            pointStrokeColor: state.chartData.datasets[0].pointStrokeColor,
            pointBorderWidth: state.chartData.datasets[0].pointBorderWidth,
            pointHoverRadius: state.chartData.datasets[0].pointHoverRadius,
            pointHoverBorderWidth: state.chartData.datasets[0].pointHoverBorderWidth,
            pointRadius: state.chartData.datasets[0].pointRadius,
            pointHitRadius: state.chartData.datasets[0].pointHitRadius,
            data: maxTemp,
          },
          {
            label: state.chartData.datasets[1].label,
            fill: state.chartData.datasets[1].fill,
            lineTension: state.chartData.datasets[1].lineTension,
            strokeColor: state.chartData.datasets[1].strokeColor,
            fillColor: state.chartData.datasets[1].fillColor,
            pointColor: state.chartData.datasets[1].pointColor,
            pointStrokeColor: state.chartData.datasets[1].pointStrokeColor,
            pointBorderWidth: state.chartData.datasets[1].pointBorderWidth,
            pointHoverRadius: state.chartData.datasets[1].pointHoverRadius,
            pointHoverBorderWidth: state.chartData.datasets[1].pointHoverBorderWidth,
            pointRadius: state.chartData.datasets[1].pointRadius,
            pointHitRadius: state.chartData.datasets[1].pointHitRadius,
            data: minTemp,
          },
        ],
      },
    };
  } else if (action.type === SEARCH_NOT_FOUND) {
    return {
      result: true,
    };
  }
  return state;
};
