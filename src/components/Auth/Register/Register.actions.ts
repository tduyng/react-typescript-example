import * as types from './Register.constants';

export const registerSuccess = payload => ({
  type: types.REGISTER_SUCCESS,
  payload,
});

export const registerFailed = payload => ({
  type: types.REGISTER_FAILED,
  payload,
});
