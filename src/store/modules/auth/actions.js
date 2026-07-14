import * as types from "store/modules/types";

const loginRequest = (payload) => {
  return { type: types.LOGIN_REQUEST, payload };
};

const loginSuccess = (payload) => {
  return { type: types.LOGIN_SUCCESS, payload };
};
const loginFailure = (payload) => {
  return { type: types.LOGIN_FAILURE, payload };
};

export { loginFailure, loginRequest, loginSuccess };
