import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as storage from './persistence/storage';
import randomToken from './utlis/random';
import getOfBeforeAfterDays from './utlis/beforAfterDays';
import * as reducers from './reducers';
import createLogger from 'redux-logger';
import style from './css/style.css';
import {
  App,
  Home
} from './components';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

let dt = new Date();
let beforeDay = getOfBeforeAfterDays(dt, 1);

if (!storage.get('token') || storage.get('created_at') > beforeDay) {
  storage.put('token', randomToken());
  storage.put('createdAt', new Date());
}

const initialState = {
  application: {
    token: storage.get('token'),
    createdAt: storage.get('created_at')
  }
};

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(
      thunk,
      createLogger
    ),
    DevTools.instrument()
  )
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);