import * as types from './Login.constants';

export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED,
});

export const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailed = payload => ({
  type: types.LOGIN_FAILED,
  payload,
});

export const userLoaded = payload => ({
  type: types.USER_LOADED,
  payload,
});

export const authError = () => ({
  type: types.AUTH_ERROR,
});

export const logout = () => ({
  type: types.LOGOUT,
});
