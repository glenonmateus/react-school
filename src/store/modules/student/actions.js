import * as types from "store/modules/types";

export const fetchStudentRequest = (payload) => {
  return { type: types.FETCH_STUDENT_REQUEST, payload };
};

export const fetchStudentSuccess = (payload) => {
  return { type: types.FETCH_STUDENT_SUCCESS, payload };
};
export const fetchStudentFailure = (payload) => {
  return { type: types.FETCH_STUDENT_FAILURE, payload };
};
