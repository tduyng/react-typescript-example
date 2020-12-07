import { combineReducers } from 'redux';
import { authReducer } from 'src/components/Auth/Auth.reducers';
// import { ProductListReducer } from "src/pages/Product/ProductList/ProductList.reducer"
// import { productItemReducer } from "src/pages/Product/ProductItem/ProductItem.reducer"

export const RootReducer = combineReducers({
  auth: authReducer,
});
