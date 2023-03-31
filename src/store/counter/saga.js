import { put, takeLatest } from "redux-saga/effects";
import { performCounterReset, reset } from "./slice";

function* counterResetHandler() {
  try {
    yield put(reset());
  } catch (error) {
    console.log("errror", error);
  }
}

export function* watchResetCounter() {
  yield takeLatest(performCounterReset.type, counterResetHandler);
}
