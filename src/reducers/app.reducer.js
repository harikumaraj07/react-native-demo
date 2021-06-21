const initialState = {
  fullScreenLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FULL_SCREEN_LOADER':
      return {
        ...state,
        fullScreenLoading: action.payload,
      };
    default:
      return state;
  }
};
