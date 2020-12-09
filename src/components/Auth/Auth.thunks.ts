import axios from 'axios';
import { URL } from 'src/constants/urls';
import * as actions from './Auth.actions';
import { v4 as uuid } from 'uuid';
import { setAlert } from 'src/components/Alert/Alert.thunks';

export const loadUser = () => async dispatch => {
  const userJson = localStorage.getItem('user') || '{}';
  const user = JSON.parse(userJson) as IUser;
  const id = user.id;
  if (!id) {
    return dispatch(actions.authError());
  }
  try {
    const res = await axios.get(`${URL.baseAPIUrl}/api/users/${id}`);
    if (res) {
      return dispatch(actions.userLoaded(res.data));
    }
    return dispatch(actions.authError());
  } catch (error) {
    return dispatch(actions.authError());
  }
};

export const login = (payload: ReqLogin) => async dispatch => {
  const { username, password } = payload;
  try {
    const res = await axios.get(`${URL.baseAPIUrl}/api/users`);
    const allUsers = res.data;

    let user = allUsers.filter(x => x.username === username)[0];
    if (user && user.password === password) {
      dispatch(actions.loginSuccess(user));
      dispatch(loadUser());
      return;
    }
    return dispatch(actions.loginFailed());
  } catch (error) {
    return dispatch(actions.loginFailed());
  }
};

export const register = (payload: ReqLogin) => async dispatch => {
  try {
    const id = uuid();
    const accessToken = id;

    const newUser = { ...payload, id, accessToken };
    await axios.post(`${URL.baseAPIUrl}/api/users`, newUser);
    dispatch(actions.registerSuccess(newUser));
    dispatch(loadUser());
  } catch (error) {
    return dispatch(actions.registerFailed());
  }
};
export const logout = () => async dispatch => {
  return dispatch(actions.logoutSuccess());
};
