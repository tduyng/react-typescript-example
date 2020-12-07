import * as types from './Auth.constants';
import produce from 'immer';
import { WritableDraft } from 'immer/dist/internal';

let userType: IUser = {
  id: '',
  username: '',
  email: undefined,
  password: '',
};
const initialState = {
  loading: true,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: userType,
};

export const authReducer = (
  state = initialState,
  action: { type: any; payload: WritableDraft<IUser> },
) =>
  produce(state, draft => {
    switch (action.type) {
      case types.USER_LOADED:
        draft.isAuthenticated = true;
        draft.loading = false;
        draft.user = action.payload;
        break;
      case types.LOGIN_SUCCESS:
      case types.REGISTER_SUCCESS:
        localStorage.setItem('token', draft.user.id);
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
