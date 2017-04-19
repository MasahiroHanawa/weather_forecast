import React from 'react';
import { connect } from 'react-redux';

export class App extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      isMenuActive: false
    };
  }
  render () {
    return (
      <div>
        <div id="forecastHeader">{this.props.children}</div>
      </div>
    );
  };
}

export default connect()(App);
