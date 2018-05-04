import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import imageSaga from './imageSaga'
import responsesSaga from './responsesSaga'


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    imageSaga(),
    responsesSaga()
  ]);
}
