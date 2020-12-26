import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  coursesListRequestSuccess,
  coursesCreateRequestSuccess,
  coursesUpdateRequestSuccess,
} from './actions';

export function* coursesRequest() {
  try {
    const response = yield call(api.get, 'api/courses');

    const courses = response.data;

    // toast.success('Usuário atualizado!')

    yield put(coursesListRequestSuccess(courses));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export function* coursesCreate({ payload }) {
  try {
    const response = yield call(api.post, 'api/courses', payload.data);

    const courses = response.data;

    // toast.success('Usuário atualizado!')

    yield put(coursesCreateRequestSuccess(courses));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export function* coursesUpdate({ payload }) {
  try {
    const response = yield call(api.put, `api/courses/${payload.data._id}`, payload.data);

    const courses = response.data;

    // toast.success('Usuário atualizado!')

    yield put(coursesUpdateRequestSuccess(courses));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@courses/REQUEST_COURSES_REQUEST', coursesRequest),
  takeLatest('@courses/CREATE_COURSES_REQUEST', coursesCreate),
  takeLatest('@courses/UPDATE_COURSES_REQUEST', coursesUpdate),
]);
