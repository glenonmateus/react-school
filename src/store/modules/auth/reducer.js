import * as types from "store/modules/types";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: { id: "", email: "", token: "" },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: {
          id: payload.id,
          email: payload.email,
          token: payload.access_token,
        },
      };
    }

    case types.LOGIN_FAILURE: {
      return { ...initialState };
    }

    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }

    case types.LOGOUT_REQUEST: {
      return { ...initialState };
    }

    case types.LOGOUT_SUCCESS: {
      return { ...initialState };
    }

    case types.LOGOUT_FAILURE: {
      return { ...initialState };
    }

    default:
      return state;
  }
};

export default reducer;
