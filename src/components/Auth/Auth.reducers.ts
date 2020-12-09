import * as types from './Auth.constants';
import produce from 'immer';

let userType: IUser = {
  id: '',
  username: '',
  email: undefined,
  password: '',
  accessToken: '',
};
const initialState = {
  loading: true,
  isAuthenticated: false,
  token: null,
  user: userType,
};

export const authReducer = (state = initialState, action: ActionRedux) =>
  produce(state, draft => {
    switch (action.type) {
      case types.USER_LOADED:
        draft.isAuthenticated = true;
        draft.loading = false;
        draft.token = action.payload.id;
        draft.user = action.payload;
        break;
      case types.LOGIN_SUCCESS:
      case types.REGISTER_SUCCESS:
        localStorage.setItem('user', JSON.stringify(action.payload));
        draft.isAuthenticated = true;
        draft.loading = false;
        draft.user = action.payload;
        break;
      case types.LOGIN_FAILED:
      case types.AUTH_ERROR:
      case types.REGISTER_FAILED:
        localStorage.removeItem('user');
        draft.token = null;
        draft.isAuthenticated = false;
        draft.loading = false;
        break;
      case types.LOGOUT:
        localStorage.removeItem('user');
        draft.token = null;
        draft.isAuthenticated = false;
        draft.loading = false;
        break;

      default:
        return state;
    }
  });
