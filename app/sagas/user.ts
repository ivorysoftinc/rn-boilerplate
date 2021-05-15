import { all, takeLatest } from '@redux-saga/core/effects';

import { IGetUserAccountAction, userActionTypes } from '../redux/user';

function* watchGetUser() {
  // TODO
}

export function* userSaga() {
  yield all([takeLatest<IGetUserAccountAction>(userActionTypes.GET_USER, watchGetUser)]);
}
