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
