import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import collaborators from './collaborators/reducer';
import courses from './courses/reducer';
import students from './students/reducer';

export default combineReducers({
  auth,
  user,
  collaborators,
  courses,
  students,
});
