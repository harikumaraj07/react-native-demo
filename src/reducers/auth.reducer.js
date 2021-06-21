const initialState = {
  token: null,
  isLoggedIn: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGEDIN':
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };

    case 'LOGOUT_USER':
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
