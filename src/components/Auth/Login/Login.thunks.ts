import { loginApi } from 'src/Api/user.api';
import * as actions from './Login.actions';

export const login = (payload: ReqLogin) => async dispatch => {
  dispatch(actions.loginRequested());
  try {
    const res = await loginApi(payload);
    localStorage.setItem('token', res.data.access_token);
    return dispatch(actions.loginSuccess(res));
  } catch (err) {
    return dispatch(actions.loginFailed);
  }
};
