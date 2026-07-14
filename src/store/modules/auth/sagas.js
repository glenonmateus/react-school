import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "services/axios";
import * as actions from "store/modules/auth/actions";
import * as types from "store/modules/types";

function* loginRequest({ payload }) {
  const { email, password, navigate } = payload;
  try {
    const response = yield call(axios.post, "/tokens", { email, password });
    yield put(actions.loginSuccess({ ...response.data }));
    axios.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;
    navigate(-1);
    toast.success("Logado com sucesso");
  } catch {
    yield put(actions.loginFailure());
    toast.error("Usuário e/ou senha inválidos");
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
