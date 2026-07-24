import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios, { handleAxiosError } from "services/axios";
import * as actions from "store/modules/student/actions";
import * as types from "store/modules/types";

const axiosFetchStudents = async () => {
  try {
    return await axios.get(`/students/`);
  } catch (error) {
    handleAxiosError(error);
  }
};

function* fetchStudentRequest() {
  try {
    const response = yield call(axiosFetchStudents);
    yield put(actions.fetchStudentSuccess(response.data));
  } catch {
    yield put(actions.fetchStudentFailure());
  }
}

const axiosDeleteStudent = async (studentId) => {
  try {
    return await axios.delete(`/students/${studentId}`);
  } catch (error) {
    handleAxiosError(error);
  }
};

function* deleteStudentRequest({ studentId }) {
  try {
    yield call(axiosDeleteStudent, studentId);
    yield put(actions.deleteStudentSuccess());
    toast.success("Aluno deletado com sucesso!");
  } catch {
    yield put(actions.deleteStudentFailure());
  }
}

const axiosStoreStudent = async (payload) => {
  const { name, surname, email, age, weight, height } = payload;
  try {
    return await axios.post(`/students/store`, {
      name,
      surname,
      email,
      age,
      weight,
      height,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

function* storeStudentRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(axiosStoreStudent, payload);
    yield put(actions.storeStudentSuccess());
    toast.success("Aluno cadastrado com sucesso!");
    navigate("/", { replace: true });
  } catch {
    yield put(actions.storeStudentFailure());
  }
}

const axiosUpdateStudent = async (payload) => {
  const { studentId, name, surname, email, age, weight, height } = payload;
  try {
    return await axios.put(`/students/${studentId}`, {
      name,
      surname,
      email,
      age,
      weight,
      height,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

function* updateStudentRequest({ payload }) {
  try {
    yield call(axiosUpdateStudent, payload);
    yield put(actions.updateStudentSuccess());
    toast.success("Aluno atualizado com sucesso!");
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
