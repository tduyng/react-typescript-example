import * as types from './Auth.constants';

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

export const authReducer = (state = initialState, action: ActionRedux) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.id,
        user: payload,
      };
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case types.LOGIN_FAILED:
    case types.AUTH_ERROR:
    case types.REGISTER_FAILED:
      localStorage.removeItem('user');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case types.LOGOUT:
      localStorage.removeItem('user');
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
