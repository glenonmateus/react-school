import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  deleteStudent,
  fetchStudent,
  storeStudent,
  updateStudent,
} from "services/axios/students";
import * as actions from "store/modules/student/actions";
import * as types from "store/modules/types";

function* fetchStudentRequest() {
  try {
    const { data } = yield call(fetchStudent);
    yield put(actions.fetchStudentSuccess(data));
  } catch {
    yield put(actions.fetchStudentFailure());
  }
}

function* deleteStudentRequest({ studentId }) {
  try {
    yield call(deleteStudent, studentId);
    yield put(actions.deleteStudentSuccess());
    toast.success("Aluno deletado com sucesso!");
  } catch {
    yield put(actions.deleteStudentFailure());
  }
}

function* storeStudentRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(storeStudent, payload);
    yield put(actions.storeStudentSuccess());
    toast.success("Aluno cadastrado com sucesso!");
    navigate("/", { replace: true });
  } catch {
    yield put(actions.storeStudentFailure());
  }
}

function* updateStudentRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(updateStudent, payload);
    yield put(actions.updateStudentSuccess());
    toast.success("Aluno atualizado com sucesso!");
    navigate("/", { replace: true });
  } catch {
    yield put(actions.updateStudentFailure());
  }
}

export default all([
  takeLatest(types.FETCH_STUDENT_REQUEST, fetchStudentRequest),
  takeLatest(types.DELETE_STUDENT_REQUEST, deleteStudentRequest),
  takeLatest(types.STORE_STUDENT_REQUEST, storeStudentRequest),
  takeLatest(types.UPDATE_STUDENT_REQUEST, updateStudentRequest),
]);
