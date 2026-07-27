import * as types from "store/modules/types";

export const storeUserRequest = () => {
  return { type: types.STORE_USER_REQUEST };
};
export const storeUserSuccess = () => {
  return { type: types.STORE_USER_SUCCESS };
};
export const storeUserFailure = () => {
  return { type: types.STORE_USER_FAILURE };
};
