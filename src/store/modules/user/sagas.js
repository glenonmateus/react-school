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

export default all([takeLatest(types.STORE_USER_REQUEST, storeUserRequest)]);
