import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import { collaboratorsListRequestSuccess, collaboratorsCreateRequestSuccess } from './actions';

export function* collaboratorsRequest() {
  try {
    const response = yield call(api.get, 'api/collaborators');

    const collaborators = response.data;

    // toast.success('Usuário atualizado!')

    yield put(collaboratorsListRequestSuccess(collaborators));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export function* collaboratorsCreate({ payload }) {
  try {
    const response = yield call(api.post, 'api/collaborators', payload.data);

    const collaborators = response.data;
    history.push('/colaboradores');

    // toast.success('Usuário atualizado!')

    yield put(collaboratorsCreateRequestSuccess(collaborators));
  } catch (err) {
    // toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    // yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@collaborators/REQUEST_COLLABORATORS_REQUEST', collaboratorsRequest),
  takeLatest('@collaborators/CREATE_COLLABORATORS_REQUEST', collaboratorsCreate),
]);
