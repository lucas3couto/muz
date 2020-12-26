import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import {
  studentsListRequestSuccess,
  studentsCreateRequestSuccess,
  studentsUpdateRequestSuccess,
} from './actions';

export function* studentsRequest() {
  try {
    const response = yield call(api.get, 'api/students');

    const students = response.data;

    // toast.success('Usuário atualizado!')

    yield put(studentsListRequestSuccess(students));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export function* studentsCreate({ payload }) {
  try {
    const response = yield call(api.post, 'api/students', payload.data);

    const students = response.data;

    // toast.success('Usuário atualizado!')

    yield put(studentsCreateRequestSuccess(students));
    history.push('/alunos');
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export function* studentsUpdate({ payload }) {
  try {
    const response = yield call(api.put, `api/students/${payload.data._id}`, payload.data);

    const students = response.data;

    // toast.success('Usuário atualizado!')

    yield put(studentsUpdateRequestSuccess(students));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@students/REQUEST_STUDENTS_REQUEST', studentsRequest),
  takeLatest('@students/CREATE_STUDENTS_REQUEST', studentsCreate),
  takeLatest('@students/UPDATE_STUDENTS_REQUEST', studentsUpdate),
]);
