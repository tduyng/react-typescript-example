import axios from 'axios';
import { URL } from 'src/constants/urls';
import * as actions from './Auth.actions';
import { v4 as uuid } from 'uuid';

export const loadUser = () => async dispatch => {
  const tokenId = localStorage.getItem('token');
  if (!tokenId) {
    return dispatch(actions.authError);
  }
  try {
    const res = await axios.get(`${URL.baseAPIUrl}/api/users/${tokenId}`);
    if (res) {
      return dispatch(actions.userLoaded(res));
    }
    dispatch(actions.authError);
  } catch (error) {
    return dispatch(actions.authError);
  }
};

export const login = (payload: ReqLogin) => async dispatch => {
  const { username, password } = payload;
  try {
    let allUsers: IUser[] = [];
    allUsers = await axios.get(`${URL.baseAPIUrl}/api/users`);
    let user = allUsers.filter(x => x.username === username)[0];
    if (user && user.password === password) {
      dispatch(actions.loginSuccess(user));
      loadUser();
    }
    dispatch(actions.loginFailed);
  } catch (error) {
    return dispatch(actions.loginFailed);
  }
};

export const register = (payload: ReqLogin) => async dispatch => {
  try {
    const id = uuid();
    const newUser = { id, ...payload };
    await axios.post(`${URL.baseAPIUrl}/api/users`, newUser);
    dispatch(actions.registerSuccess(newUser));
    console.log('Resgister success', newUser);
    const all = await axios.get(`${URL.baseAPIUrl}/api/users`);
    console.log('All users', all);
    loadUser();
  } catch (error) {
    return dispatch(actions.registerFailed);
  }
};
export const logout = () => async dispatch => {
  return dispatch(actions.logout);
};
