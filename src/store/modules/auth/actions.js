import * as types from "store/modules/types";

export const loginRequest = (payload) => {
  return { type: types.LOGIN_REQUEST, payload };
};

export const loginSuccess = (payload) => {
  return { type: types.LOGIN_SUCCESS, payload };
};
export const loginFailure = (payload) => {
  return { type: types.LOGIN_FAILURE, payload };
};

export const logoutRequest = (payload) => {
  return { type: types.LOGOUT_REQUEST, payload };
};

export const logoutSuccess = () => {
  return { type: types.LOGOUT_SUCCESS };
};
export const logoutFailure = () => {
  return { type: types.LOGOUT_FAILURE };
};
