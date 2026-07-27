import { all } from "redux-saga/effects";
import auth from "store/modules/auth/sagas";
import student from "store/modules/student/sagas";
import user from "store/modules/user/sagas";

export default function* rootSaga() {
  return yield all([auth, student, user]);
}
