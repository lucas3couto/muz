import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
import collaborators from './collaborators/saga';
import courses from './courses/saga';
import students from './students/saga';

export default function* rootSaga() {
  return yield all([auth, user, collaborators, courses, students]);
}
