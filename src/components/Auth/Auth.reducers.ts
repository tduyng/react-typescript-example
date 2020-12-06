import * as types from './Auth.constants';
import produce from 'immer';

const initialState = {
  loading: true,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: null,
};

export const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.USER_LOADED:
        draft.isAuthenticated = true;
        draft.loading = false;
        draft.user = action.payload;
        break;
      case types.LOGIN_REQUESTED:
        draft.loading = true;
        draft.isAuthenticated = false;
        draft.user = action.payload;
        break;
      case types.LOGIN_SUCCESS:
      case types.REGISTER_SUCCESS:
        draft.loading = false;
        draft.isAuthenticated = true;
        break;
      case types.LOGIN_FAILED:
      case types.AUTH_ERROR:
      case types.LOGOUT:
      case types.REGISTER_FAILED:
        localStorage.removeItem('token');
        draft.loading = false;
        draft.isAuthenticated = false;
        draft.token = null;
        break;

      default:
        return state;
    }
  });
