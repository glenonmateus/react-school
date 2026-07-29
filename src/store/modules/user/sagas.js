import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios, { handleAxiosError } from "services/axios";
import * as types from "store/modules/types";
import * as actions from "store/modules/user/actions";

const axiosStoreUser = async (payload) => {
  const { name, surname, email, password } = payload;
  try {
    return await axios.post(`/users/store`, {
      name,
      surname,
      email,
      password,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

function* storeUserRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(axiosStoreUser, payload);
    yield put(actions.storeUserSuccess());
    toast.success("Conta criada com sucesso!");
    navigate("/login", { replace: true });
  } catch {
    yield put(actions.storeUserFailure());
  }
}

const axiosUpdateUser = async (payload) => {
  const { name, surname, email, password } = payload;
  try {
    return await axios.put(`/users/`, {
      name,
      surname,
      email,
      password,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

function* updateUserRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(axiosUpdateUser, payload);
    yield put(actions.updateUserSuccess());
    toast.success("Conta atualizada com sucesso!");
    navigate("/", { replace: true });
  } catch {
    yield put(actions.updateUserFailure());
  }
}

const axiosFetchUser = async (payload) => {
  const { id } = payload;
  try {
    return await axios.get(`/users/${id}`);
  } catch (error) {
    handleAxiosError(error);
  }
};

function* fetchUserRequest({ payload }) {
  try {
    const response = yield call(axiosFetchUser, payload);
    yield put(actions.fetchUserSuccess(response.data));
  } catch {
    yield put(actions.fetchUserFailure());
  }
}

export default all([
  takeLatest(types.STORE_USER_REQUEST, storeUserRequest),
  takeLatest(types.UPDATE_STUDENT_REQUEST, updateUserRequest),
  takeLatest(types.FETCH_USER_REQUEST, fetchUserRequest),
]);
