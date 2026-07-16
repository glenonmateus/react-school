import * as types from "store/modules/types";

const initialState = {
  isLoggedIn: false,
  token: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: payload.access_token,
        isLoading: false,
      };
    }

    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false };
    }

    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
};

export default reducer;
