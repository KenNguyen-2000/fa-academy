import { all } from 'redux-saga/effects';
import * as LoginSaga from './loginSaga/loginSaga';

export default function* rootSaga() {
  yield all([LoginSaga.watchLogin]);
}
