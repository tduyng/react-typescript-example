import * as actions from './Alert.actions';
import { v4 as uuid } from 'uuid';
import { AlertTypes } from 'src/constants/alerts';

interface PayloadAlert {
  msg: string;
  type: AlertTypes;
}
export const setAlert = (payload: PayloadAlert) => async dispatch => {
  const newAlert = { ...payload, id: uuid() };
  dispatch(actions.setAlertSuccess(newAlert));
  setTimeout(() => dispatch(actions.removeAlertSuccess(newAlert.id)), 4000);
};
