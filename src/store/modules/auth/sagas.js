import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios, { handleAxiosError } from "services/axios";
import * as actions from "store/modules/auth/actions";
import * as types from "store/modules/types";

const axiosGenerateToken = async ({ email, password }) => {
  try {
    return await axios.post("/tokens", { email, password });
  } catch (error) {
    handleAxiosError(error);
  }
};

function* loginRequest({ payload }) {
  const { email, password, navigate } = payload;
  try {
    const response = yield call(axiosGenerateToken, { email, password });
    yield put(actions.loginSuccess(response.data));
    toast.success("Logado com sucesso");
    navigate("/", { replace: true });
  } catch {
    yield put(actions.loginFailure());
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
