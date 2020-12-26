export function collaboratorsListRequest(data) {
  return {
    type: '@collaborators/REQUEST_COLLABORATORS_REQUEST',
    payload: { data },
  };
}

export function collaboratorsListRequestSuccess(data) {
  return {
    type: '@collaborators/REQUEST_COLLABORATORS_SUCCESS',
    payload: { data },
  };
}

export function collaboratorsCreateRequest(data) {
  console.log('Action', data);
  return {
    type: '@collaborators/CREATE_COLLABORATORS_REQUEST',
    payload: { data },
  };
}

export function collaboratorsCreateRequestSuccess(data) {
  return {
    type: '@collaborators/CREATE_COLLABORATORS_SUCCESS',
    payload: { data },
  };
}
