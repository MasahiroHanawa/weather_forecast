import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as storage from './persistence/storage';
import randomToken from './utlis/random';
import getPastDays from './utlis/pastFutureDays';
import * as reducers from './reducers';
import {
  App,
  Home,
} from './components';
import style from './css/style.css';

const reducer = combineReducers(
  Object.assign({}, reducers, {
    routing: routerReducer,
  }),
);

const dt = new Date().getTime();
const pastDay = getPastDays(dt, 1);

if (!storage.get('token') || storage.get('createdAt') > pastDay) {
  storage.put('token', randomToken());
  storage.put('createdAt', dt);
}

const initialState = {
  application: {
    token: storage.get('token'),
    createdAt: storage.get('created_at'),
  },
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(
      thunk,
    ),
  ),
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