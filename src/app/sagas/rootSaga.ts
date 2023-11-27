import { all, fork } from "redux-saga/effects";
import { watchSetRandom } from "./counter/sagas";

const rootSaga = function* () {
  yield all([
    fork(watchSetRandom),
    // Other forks
  ]);
};

export default rootSaga;