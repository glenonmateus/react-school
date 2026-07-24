import * as types from "store/modules/types";

export const fetchStudentRequest = () => {
  return { type: types.FETCH_STUDENT_REQUEST };
};

export const fetchStudentSuccess = (payload) => {
  return { type: types.FETCH_STUDENT_SUCCESS, payload };
};

export const fetchStudentFailure = () => {
  return { type: types.FETCH_STUDENT_FAILURE };
};

export const deleteStudentRequest = (studentId) => {
  return { type: types.DELETE_STUDENT_REQUEST, studentId };
};

export const deleteStudentSuccess = () => {
  return { type: types.DELETE_STUDENT_SUCCESS };
};

export const deleteStudentFailure = () => {
  return { type: types.DELETE_STUDENT_FAILURE };
};

export const updateStudentRequest = (payload) => {
  return { type: types.UPDATE_STUDENT_REQUEST, payload };
};

export const updateStudentSuccess = () => {
  return { type: types.UPDATE_STUDENT_SUCCESS };
};

export const updateStudentFailure = () => {
  return { type: types.UPDATE_STUDENT_FAILURE };
};

export const storeStudentRequest = (payload) => {
  return { type: types.STORE_STUDENT_REQUEST, payload };
};

export const storeStudentSuccess = () => {
  return { type: types.STORE_STUDENT_SUCCESS };
};

export const storeStudentFailure = () => {
  return { type: types.STORE_STUDENT_FAILURE };
};
