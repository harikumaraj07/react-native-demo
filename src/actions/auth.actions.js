import {fetchApi} from '../services/api';

export const userLoginAction = payload => dispatch =>
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
        type: 'USER_LOGGEDIN',
        payload: data,
      });
      return data;
    })
    .catch(error => {
      throw new Error(error);
    });
