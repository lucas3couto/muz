import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  social: null,
  address: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        draft.social = action.payload.social;
        return (draft.address = action.payload.address);
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.user;
        draft.social = action.payload.social;
        return (draft.address = action.payload.address);
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        return (draft.social = null);
      }
      case '@auth/AUTH_SHOPIFY_SUCCESS': {
        return (draft.store = action.payload.store);
      }
      case '@auth/PERMISSIONS_SHOPIFY_SUCCESS': {
        return (draft.store = action.payload.store);
      }
      default:
        return state;
    }
  });
}
