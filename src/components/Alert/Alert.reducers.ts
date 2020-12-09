import * as types from './Alert.constants';

const initialState = [] as IAlert[];

export const alertReducer = (state = initialState, action: ActionRedux) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_ALERT:
      return [...state, payload];
    case types.REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
};
