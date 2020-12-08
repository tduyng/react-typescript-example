import { combineReducers } from 'redux';
import { authReducer } from 'src/components/Auth/Auth.reducers';
import { productReducer } from 'src/components/Products/Product.reducers';

export const RootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});
