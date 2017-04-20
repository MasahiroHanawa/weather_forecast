import { ButtonGroup, Button } from 'react-bootstrap';
import { Line } from 'react-chartjs';
import React from 'react';
import { connect } from 'react-redux';
import search from '../actions/cityForcast';


export class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      name: null,
    };
  }
  componentWillMount() {
    this.props.search(this.props.application.token);
  }

  handleSearch(evt) {
    evt.preventDefault();
    this.props.search(this.props.application.token);
  }
  render() {
    let title = null;
    return (
      <div className="center-block">
        {(() => {
          if (this.props.cityForecast.name || (this.props.cityForecast.name !== this.state.name)) {
            title = (
              <div className="forecastTitle">
                <p className="text-center">{this.props.cityForecast.name}</p>
              </div>
            );
          } else if (this.props.cityForecast.result) {
            title = (
              <div className="forecastTitle">
                <p className="text-center">Can&apos;t find forecast data.</p>
              </div>
            );
          } else {
            title = <div className="forecastTitle"><p className="text-center">Loading...</p></div>;
          }
          return title;
        })()}
        {(() => {
          let chartData = null;
          if (this.props.cityForecast.name || (this.props.cityForecast.name !== this.state.name)) {
            chartData = (
              <Line
                data={this.props.cityForecast.chartData}
                className="center-block"
                width="600"
                height="250"
              />
            );
          }
          return chartData;
        })()}
        {(() => {
          let weatherList = null;
          if (this.props.cityForecast.name || (this.props.cityForecast.name !== this.state.name)) {
            weatherList = (
              <div className="forecastContainer row center-block">
                { this.props.cityForecast.list.map((forecastData) => {
                  const dataHtml = (
                    <div key={forecastData.dt} className="forecastCol">
                      <p>
                        <img src={`http://openweathermap.org/img/w/${forecastData.weather[0].icon}.png`} alt="" />
                      </p>
                      <p>{forecastData.temp.day}°C</p>
                      <p>{forecastData.speed}m/s</p>
                      <p>{forecastData.pressure}</p>
                    </div>
                  );
                  return dataHtml;
                })
                }
              </div>
            );
          }
          return weatherList;
        })()}
        {(() => {
          let searchbutton = null;
          if (this.props.cityForecast.name || (this.props.cityForecast.name !== this.state.name)) {
            searchbutton = (
              <div className="center-block forecastContainer">
                <ButtonGroup className="pull-right searchButton">
                  <Button bsStyle="default" onClick={this.handleSearch}>Search</Button>
                </ButtonGroup>
              </div>
            );
          }
          return searchbutton;
        })()}
      </div>
    );
  }
}

Home.propTypes = {
  search: React.PropTypes.func.isRequired,
  cityForecast: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    country: React.PropTypes.string,
    coord: React.PropTypes.shape({
      lon: React.PropTypes.number,
      lat: React.PropTypes.number,
    }).isRequired,
    cnt: React.PropTypes.number,
    cod: React.PropTypes.string,
    list: React.PropTypes.array,
    result: React.PropTypes.bool,
    chartData: React.PropTypes.shape({
      labels: React.PropTypes.array,
      datasets: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          label: React.PropTypes.string,
          fill: React.PropTypes.bool.isRequired,
          lineTension: React.PropTypes.number,
          strokeColor: React.PropTypes.string,
          fillColor: React.PropTypes.string,
          pointColor: React.PropTypes.string,
          pointStrokeColor: React.PropTypes.string,
          pointBorderWidth: React.PropTypes.number,
          pointHoverRadius: React.PropTypes.number,
          pointHoverBorderWidth: React.PropTypes.number,
          pointRadius: React.PropTypes.number,
          pointHitRadius: React.PropTypes.number,
          data: React.PropTypes.array,
        }),
        React.PropTypes.shape({
          label: React.PropTypes.string,
          fill: React.PropTypes.bool.isRequired,
          lineTension: React.PropTypes.number,
          strokeColor: React.PropTypes.string,
          fillColor: React.PropTypes.string,
          pointColor: React.PropTypes.string,
          pointStrokeColor: React.PropTypes.string,
          pointBorderWidth: React.PropTypes.number,
          pointHoverRadius: React.PropTypes.number,
          pointHoverBorderWidth: React.PropTypes.number,
          pointRadius: React.PropTypes.number,
          pointHitRadius: React.PropTypes.number,
          data: React.PropTypes.array,
        }),
      ),
    }),
    result: React.PropTypes.bool.isRequired,
  }).isRequired,
  application: React.PropTypes.shape({
    token: React.PropTypes.string,
    createdAt: React.PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => {
  const stateToprops = {
    application: state.application,
    cityForecast: state.cityForecast,
  };
  return stateToprops;
};

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    search: (token) => {
      dispatch(search(token));
    },
  };
  return dispatchProps;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

