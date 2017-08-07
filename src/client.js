import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import reducers from './reducers/index'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import BookList from './components/pages/BookList';
import Cart from './components/pages/Cart'
import BookForm from './components/pages/BookForm'
import Main from './Main'

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BookList}/>
        <Route path="/admin" component={BookForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>
    </Router>
  </Provider>
);

render(
  Routes,
  document.getElementById('app')
);
