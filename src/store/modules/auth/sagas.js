import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "services/axios";
import * as actions from "store/modules/auth/actions";
import * as types from "store/modules/types";

const login = async ({ email, password }) => {
  try {
    return await axios.post("/tokens", { email, password });
  } catch (error) {
    throw new Error(error);
  }
};

function* loginRequest({ payload }) {
  const { email, password, navigate } = payload;
  try {
    const response = yield call(login, { email, password });
    yield put(actions.loginSuccess(response.data));
    toast.success("Logado com sucesso");
    navigate("/");
  } catch {
    yield put(actions.loginFailure());
    toast.error("Usuário e/ou senha inválidos");
  }
}

function* logoutRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield put(actions.logoutSuccess());
    navigate("/login");
  } catch {
    yield put(actions.logoutFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.LOGOUT_REQUEST, logoutRequest),
]);
