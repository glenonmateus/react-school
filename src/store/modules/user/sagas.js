import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUserById, storeUser, updateUser } from "services/axios/users";
import * as types from "store/modules/types";
import * as actions from "store/modules/user/actions";

function* storeUserRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(storeUser, payload);
    yield put(actions.storeUserSuccess());
    toast.success("Conta criada com sucesso!");
    navigate("/login", { replace: true });
  } catch {
    yield put(actions.storeUserFailure());
  }
}

function* updateUserRequest({ payload }) {
  const { navigate } = payload;
  try {
    yield call(updateUser, payload);
    yield put(actions.updateUserSuccess(payload));
    toast.success("Conta atualizada com sucesso!");
    navigate("/", { replace: true });
  } catch {
    yield put(actions.updateUserFailure());
  }
}

function* fetchUserRequest({ payload }) {
  try {
    const { data } = yield call(fetchUserById, payload);
    yield put(actions.fetchUserSuccess(data));
  } catch {
    yield put(actions.fetchUserFailure());
  }
}

export default all([
  takeLatest(types.STORE_USER_REQUEST, storeUserRequest),
  takeLatest(types.UPDATE_USER_REQUEST, updateUserRequest),
  takeLatest(types.FETCH_USER_REQUEST, fetchUserRequest),
]);
