import {combineReducers} from 'redux';

import app from './app.reducer';
import auth from './auth.reducer';

const reducers = {
  app,
  auth,
};

const combineReducer = combineReducers(reducers);

export default combineReducer;
