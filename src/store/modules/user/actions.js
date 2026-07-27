import * as types from "store/modules/types";

export const storeUserRequest = (payload) => {
  return { type: types.STORE_USER_REQUEST, payload };
};
export const storeUserSuccess = () => {
  return { type: types.STORE_USER_SUCCESS };
};
export const storeUserFailure = () => {
  return { type: types.STORE_USER_FAILURE };
};

export const fetchUserRequest = (payload) => {
  return { type: types.FETCH_USER_REQUEST, payload };
};
export const fetchUserSuccess = () => {
  return { type: types.FETCH_USER_SUCCESS };
};
export const fetchUserFailure = () => {
  return { type: types.FETCH_USER_FAILURE };
};

export const updateUserRequest = (payload) => {
  return { type: types.UPDATE_USER_REQUEST, payload };
};
export const updateUserSuccess = () => {
  return { type: types.UPDATE_USER_SUCCESS };
};
export const updateUserFailure = () => {
  return { type: types.UPDATE_USER_FAILURE };
};
