import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Index from './containers/Index';
import rootReducer from './reducers';

import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {updateDepartments, updateTeachers} from "./actions";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(updateDepartments());
store.dispatch(updateTeachers());
