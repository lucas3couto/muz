import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@students/REQUEST_STUDENTS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@students/CREATE_STUDENTS_SUCCESS': {
        const data = [...state.data, action.payload.data];
        draft.data = data;
        break;
      }
      case '@students/UPDATE_STUDENTS_SUCCESS': {
        const updatedItem = action.payload.data;
        const data = state.data.map(e => (e._id === updatedItem._id ? updatedItem : e));
        draft.data = data;
        break;
      }
      default:
    }
  });
}
