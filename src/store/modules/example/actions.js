import * as types from "store/modules/types";

const buttonClickSuccess = () => {
  return { type: types.BUTTON_CLICK_SUCCESS };
};

const buttonClickFailure = () => {
  return { type: types.BUTTON_CLICK_FAILURE };
};
const buttonClickRequest = () => {
  return { type: types.BUTTON_CLICK_REQUEST };
};

export { buttonClickFailure, buttonClickRequest, buttonClickSuccess };
