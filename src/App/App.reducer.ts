import * as types from './App.constants';
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from 'src/components/Auth/Auth.constants';
import produce from 'immer';

const initialState = {
  isAuthenticated: false,
};

export const AppReducer = (state = initialState, action: { type: any }) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT:
        localStorage.removeItem('token');
        draft.isAuthenticated = false;
        break;
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        draft.isAuthenticated = true;
        break;
      default:
        return state;
    }
  });
