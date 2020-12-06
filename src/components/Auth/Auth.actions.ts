import * as types from './Auth.constants';

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

export const registerSuccess = payload => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

export const registerFailed = payload => ({
  type: types.REGISTER_FAILED,
  payload,
});
