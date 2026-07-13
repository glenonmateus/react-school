import * as types from "store/modules/types";

const initialState = { isClicked: false };

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.BUTTON_CLICK_SUCCESS: {
      console.log("Sucesso");
      const newState = { ...state };
      newState.isClicked = !newState.isClicked;
      return newState;
    }
    case types.BUTTON_CLICK_FAILURE: {
      console.log("Failure");
      return state;
    }
    case types.BUTTON_CLICK_REQUEST: {
      console.log("Request");
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
