import React from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions/cityForcast';
import { ButtonGroup, Button } from 'react-bootstrap';
import {Line} from 'react-chartjs';

export class Home extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      name: null
    };
  }

  componentWillMount () {
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
          if (this.props.cityForecast.name || (this.props.cityForecast.name != this.state.name)) {
            title = <div className="forecastTitle"><p className="text-center">{this.props.cityForecast.name}</p></div>;
          } else if (this.props.cityForecast.result) {
            title = <div className="forecastTitle"><p className="text-center">Can't find forecast data.</p></div>;
          } else {
            title = <div className="forecastTitle"><p className="text-center">Loading...</p></div>;
          }
          return title;
        })()}
        {(() => {
          if (this.props.cityForecast.name || (this.props.cityForecast.name != this.state.name)) {
            return <Line data={this.props.cityForecast.chartData}
              className="center-block"
              width="600"
              height="250"
            />;
          }
        })()}
        {(() => {
          if (this.props.cityForecast.name || (this.props.cityForecast.name != this.state.name)) {
            return <div className="forecastContainer row center-block">
              { this.props.cityForecast.list.map((forecastData, i) => {
                return <div key={i} className="forecastCol">
                  <p>
                    <img src={'http://openweathermap.org/img/w/' + forecastData.weather[0].icon + '.png'}/>
                  </p>
                  <p>{forecastData.temp.day}°C</p>
                  <p>{forecastData.speed}m/s</p>
                  <p>{forecastData.pressure}</p>
                </div>;
              })}
            </div>;
          }
        })()}
        {(() => {
          if (this.props.cityForecast.name || (this.props.cityForecast.name != this.state.name)) {
            return <div className="center-block forecastContainer"><ButtonGroup className="pull-right searchButton">
              <Button bsStyle="default" onClick={this.handleSearch}>Search</Button>
            </ButtonGroup></div>;
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application,
    cityForecast: state.cityForecast
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (token) => {
      dispatch(actions.search(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

