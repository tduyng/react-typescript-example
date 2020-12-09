import { combineReducers } from 'redux';
import { authReducer } from 'src/components/Auth/Auth.reducers';
import { productReducer } from 'src/components/Products/Product.reducers';
import { alertReducer } from 'src/components/Alert/Alert.reducers';

export const RootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  alerts: alertReducer,
});
