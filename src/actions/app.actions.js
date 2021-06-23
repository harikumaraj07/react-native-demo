import { SET_CONTACT_LIST, SET_ACTIVE_USER, ADD_DATA, UPDATE_DATA, REMOVE_DATA } from './types';

export const setActiveUserAction = payload => dispatch => {
  dispatch({ type: SET_ACTIVE_USER, payload });
  dispatch(loadDataAction());
};

export const loadDataAction = () => (dispatch, getState) => {
  const { app: { data, activeUser } } = getState();
  const contacts = data.filter(_data => _data.userId === activeUser.userId);
  dispatch({ type: SET_CONTACT_LIST, payload: contacts });
};

export const addContactAction = payload => dispatch => {
  dispatch({ type: ADD_DATA, payload });
  dispatch(loadDataAction());
};

export const updateContactAction = payload => dispatch => {
  dispatch({ type: UPDATE_DATA, payload });
  dispatch(loadDataAction());
};

export const removeContactAction = payload => dispatch => {
  dispatch({ type: REMOVE_DATA, payload });
  dispatch(loadDataAction());
};
