import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        return (draft.loading = true);
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        return (draft.loading = false);
      }
      case '@auth/SIGN_FAILURE': {
        return (draft.loading = false);
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        return (draft.signed = false);
      }
      default:
        return state;
    }
  });
}
