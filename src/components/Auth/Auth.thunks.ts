import axios from 'axios';
import { URL } from 'src/constants/urls';
import * as actions from './Auth.actions';
import { v4 as uuid } from 'uuid';

export const loadUser = () => async dispatch => {
  const userJson = localStorage.getItem('user') || '{}';
  const user = JSON.parse(userJson) as IUser;
  const id = user.id;
  console.log('Load user running!');
  console.log('User from loadUser', user);
  if (!id) {
    return dispatch(actions.authError());
  }
  try {
    const res = await axios.get(`${URL.baseAPIUrl}/api/users/${id}`);
    console.log('Response', res);
    console.log('Hey loadUser function triggered');
    if (res) {
      return dispatch(actions.userLoaded(res.data));
    }
    return dispatch(actions.authError());
  } catch (error) {
    console.log('Some error loadUser running', error);
    return dispatch(actions.authError());
  }
};

export const login = (payload: ReqLogin) => async dispatch => {
  const { username, password } = payload;
  console.log('Login triggered');
  try {
    const res = await axios.get(`${URL.baseAPIUrl}/api/users`);
    const allUsers = res.data;

    let user = allUsers.filter(x => x.username === username)[0];
    console.log('user found  from login', user);
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
  console.log('Register triggered');
  try {
    const id = uuid();
    const accessToken = id;

    const newUser = { ...payload, id, accessToken };
    await axios.post(`${URL.baseAPIUrl}/api/users`, newUser);
    dispatch(actions.registerSuccess(newUser));
    console.log('Resgister success', newUser);
    dispatch(loadUser());
  } catch (error) {
    return dispatch(actions.registerFailed());
  }
};
export const logout = () => async dispatch => {
  console.log('Logout triggered');
  return dispatch(actions.logoutSuccess());
};
