import * as types from "store/modules/types";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  access_token: "",
  user: { id: "", name: "", surname: "", email: "" },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        access_token: payload.access_token,
        user: {
          id: payload.user.id,
          name: payload.user.name,
          surname: payload.user.surname,
          email: payload.user.email,
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
