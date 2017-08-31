import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';
import {Router, Route, browserHistory} from 'react-router';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} >
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
