export function coursesListRequest(data) {
  return {
    type: '@courses/REQUEST_COURSES_REQUEST',
    payload: { data },
  };
}

export function coursesListRequestSuccess(data) {
  return {
    type: '@courses/REQUEST_COURSES_SUCCESS',
    payload: { data },
  };
}

export function coursesCreateRequest(data) {
  return {
    type: '@courses/CREATE_COURSES_REQUEST',
    payload: { data },
  };
}

export function coursesCreateRequestSuccess(data) {
  return {
    type: '@courses/CREATE_COURSES_SUCCESS',
    payload: { data },
  };
}

export function coursesUpdateRequest(data) {
  return {
    type: '@courses/UPDATE_COURSES_REQUEST',
    payload: { data },
  };
}

export function coursesUpdateRequestSuccess(data) {
  return {
    type: '@courses/UPDATE_COURSES_SUCCESS',
    payload: { data },
  };
}
