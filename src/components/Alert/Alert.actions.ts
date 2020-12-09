import * as types from './Alert.constants';

export const setAlertSuccess = (payload: IAlert) => ({
  type: types.SET_ALERT,
  payload,
});

export const removeAlertSuccess = (payload: string) => ({
  type: types.REMOVE_ALERT,
  payload,
});
