import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {syncReduxAndRouter, routeReducer} from 'redux-simple-router';

import reducers from './reducers';
import getRoutes from './root.jsx';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const store = createStore(reducer);
const history = createBrowserHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById('mount')
);
