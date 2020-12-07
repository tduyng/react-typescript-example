import * as types from './Auth.constants';

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

export const authReducer = (state = initialState, action: ActionRedux) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.id,
        user: payload.user,
      };
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      localStorage.setItem('token', payload.id);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case types.LOGIN_FAILED:
    case types.AUTH_ERROR:
    case types.LOGOUT:
    case types.REGISTER_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
