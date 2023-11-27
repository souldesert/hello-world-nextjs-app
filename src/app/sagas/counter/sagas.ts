import { put, takeLatest } from 'redux-saga/effects';
import { set } from '../../store/counterSlice';
import { SET_RANDOM } from './types';

function* getSetRandomSaga() {
  // тут мог бы быть вызов API
  const random = Math.floor(Math.random() * 10);
  yield put(set(random));
}

export function* watchSetRandom() {
  yield takeLatest(SET_RANDOM, getSetRandomSaga);
}