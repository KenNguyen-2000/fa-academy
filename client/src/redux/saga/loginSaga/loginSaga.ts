import { call, takeLatest } from '@redux-saga/core/effects';
import * as loginService from '../../../api/login';

function* login({ type, payload }: any): Generator<any> {
  try {
    const res = yield call(
      loginService.loginAPI,
      payload.email,
      payload.password
    );
    console.log(res,type)
  } catch (error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN', login);
}
