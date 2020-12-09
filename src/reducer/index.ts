import { combineReducers } from 'redux';
import { authReducer } from 'src/containers/Auth/Auth.reducers';
import { productReducer } from 'src/containers/Products/Product.reducers';

export const RootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});
