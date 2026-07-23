import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "services/axios";
import * as actions from "store/modules/student/actions";
import * as types from "store/modules/types";

const axiosFetchStudents = async () => {
  try {
    return await axios.get(`/students/`);
  } catch (error) {
    throw new Error(error);
  }
};

function* fetchStudentRequest() {
  try {
    const response = yield call(axiosFetchStudents);
    yield put(actions.fetchStudentSuccess(response.data));
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Usuário não autenticado");
    }
    yield put(actions.fetchStudentFailure());
  }
}

const axiosDeleteStudent = async (studentId) => {
  try {
    return await axios.delete(`/students/${studentId}`);
  } catch (error) {
    throw new Error(error);
  }
};

function* deleteStudentRequest({ studentId }) {
  try {
    yield call(axiosDeleteStudent, studentId);
    yield put(actions.deleteStudentSuccess());
    toast.success("Aluno deletado com sucesso!");
  } catch {
    yield put(actions.deleteStudentFailure());
    toast.error("Erro ao deletar aluno");
  }
}

export default all([
  takeLatest(types.FETCH_STUDENT_REQUEST, fetchStudentRequest),
  takeLatest(types.DELETE_STUDENT_REQUEST, deleteStudentRequest),
]);
