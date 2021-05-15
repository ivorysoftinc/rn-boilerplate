import { all, takeLatest } from '@redux-saga/core/effects';

import { GetUserAccountAction, userActionTypes } from '../redux/user';

function* watchGetUser() {
  // TODO
}

export function* userSaga() {
  yield all([takeLatest<GetUserAccountAction>(userActionTypes.GET_USER, watchGetUser)]);
}
