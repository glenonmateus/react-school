import * as types from "store/modules/types";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.FETCH_USER_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case types.FETCH_USER_FAILURE: {
      return { ...state, isLoading: false, error: payload };
    }

    case types.STORE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.STORE_USER_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case types.STORE_USER_FAILURE: {
      return { ...state, isLoading: false, error: payload };
    }

    case types.UPDATE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.UPDATE_USER_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case types.UPDATE_USER_FAILURE: {
      return { ...state, isLoading: false, error: payload };
    }

    default:
      return state;
  }
};

export default reducer;
