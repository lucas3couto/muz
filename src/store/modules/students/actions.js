export function studentsListRequest(data) {
  return {
    type: '@students/REQUEST_STUDENTS_REQUEST',
    payload: { data },
  };
}

export function studentsListRequestSuccess(data) {
  return {
    type: '@students/REQUEST_STUDENTS_SUCCESS',
    payload: { data },
  };
}

export function studentsCreateRequest(data) {
  return {
    type: '@students/CREATE_STUDENTS_REQUEST',
    payload: { data },
  };
}

export function studentsCreateRequestSuccess(data) {
  return {
    type: '@students/CREATE_STUDENTS_SUCCESS',
    payload: { data },
  };
}

export function studentsUpdateRequest(data) {
  return {
    type: '@students/UPDATE_STUDENTS_REQUEST',
    payload: { data },
  };
}

export function studentsUpdateRequestSuccess(data) {
  return {
    type: '@students/UPDATE_STUDENTS_SUCCESS',
    payload: { data },
  };
}
