import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { generateToken } from "services/axios/tokens";
import * as actions from "store/modules/auth/actions";
import * as types from "store/modules/types";

function* loginRequest({ payload }) {
  const { email, password, navigate } = payload;
  try {
    const { data } = yield call(generateToken, { email, password });
    yield put(actions.loginSuccess(data));
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
