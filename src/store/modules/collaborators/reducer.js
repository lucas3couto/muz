import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@collaborators/REQUEST_COLLABORATORS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@collaborators/CREATE_COLLABORATORS_SUCCESS': {
        console.log('DATA REDUCER', action.payload.data);
        console.log('State data', state.data);
        const data = [...state.data, action.payload.data];
        console.log('REDUCER ADD', data);
        draft.data = data;
        break;
      }
      default:
    }
  });
}
