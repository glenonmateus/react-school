import * as types from "store/modules/types";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_STUDENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case types.FETCH_STUDENT_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }

    case types.FETCH_STUDENT_FAILURE: {
      return { ...state, isLoading: false, error: payload };
    }

    default:
      return state;
  }
};

export default reducer;
