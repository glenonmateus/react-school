import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "store/modules/example/actions";
import * as types from "store/modules/types";

const buttonRequest = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

function* exampleRequest() {
  try {
    yield call(buttonRequest);
    yield put(actions.buttonClickSuccess());
    toast.success("Botão clicado com sucesso!");
  } catch {
    yield put(actions.buttonClickFailure());
    toast.error("Erro ao clicar no botão!");
  }
}

export default all([takeLatest(types.BUTTON_CLICK_REQUEST, exampleRequest)]);
