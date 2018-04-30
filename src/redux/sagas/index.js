import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import imageSaga from './imageSaga'


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    imageSaga()
    // watchIncrementAsync()
  ]);
}
