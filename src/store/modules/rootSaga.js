import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
import collaborators from './collaborators/saga';

export default function* rootSaga() {
  return yield all([auth, user, collaborators]);
}
