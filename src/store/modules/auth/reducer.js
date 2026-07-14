import * as types from "store/modules/types";

const initialState = {
  isLoggedIn: false,
  token: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.access_token;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      return initialState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
