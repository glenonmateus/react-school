import * as types from "store/modules/types";

const initialState = {
  isLoggedIn: false,
  token: false,
  isLoading: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = payload.access_token;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_REQUEST: {
      console.log("loginRequest", payload);
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
