import { SET_ACTIVE_USER, SET_CONTACT_LIST, SET_DATA, ADD_DATA, REMOVE_DATA, UPDATE_DATA } from '../actions/types';
import { data, users } from '../utils/data.utils';

const initialState = {
  activeUser: users[0],
  contacts: data.filter(_data => _data.userId === users[0].userId),
  data: data,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_LIST:
      return {
        ...state,
        contacts: action.payload,
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case REMOVE_DATA:
      return {
        ...state,
        data: [...state.data.filter(_data => _data.id !== action.payload.id)],
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: [...state.data.map(_data => _data.id === action.payload.id ? { ..._data, ...action.payload } : { ..._data })],
      };
    default:
      return state;
  }
};
