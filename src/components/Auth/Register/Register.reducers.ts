import * as types from './Register.constants';
import produce from 'immer';

const initialState = {
  loading: true,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
};

export const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.REGISTER_SUCCESS:
        draft.loading = false;
        draft.isAuthenticated = true;
        break;
      case types.REGISTER_FAILED:
        localStorage.removeItem('token');
        draft.token = null;
        draft.loading = false;
        draft.isAuthenticated = false;
        break;
      default:
        return state;
    }
  });
