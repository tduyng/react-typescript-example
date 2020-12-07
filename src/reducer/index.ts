import { combineReducers } from 'redux';
import { AppReducer } from 'src/App/App.reducer';
import { loginReducer } from 'src/components/Auth/Auth.reducers';
// import { ProductListReducer } from "src/pages/Product/ProductList/ProductList.reducer"
// import { productItemReducer } from "src/pages/Product/ProductItem/ProductItem.reducer"

export const RootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
});
