import {fetchApi} from '../services/api';
import {SET_DATA} from './types';

export const getDataAction = payload => dispatch =>
  fetchApi(
    '/api/authenticate',
    'POST',
    200,
    payload,
    {'User-Agent': 'Mobile'},
    false,
  )
    .then(data => {
      dispatch({
        type: SET_DATA,
        payload: data,
      });
      return data;
    })
    .catch(error => {
      throw new Error(error);
    });
