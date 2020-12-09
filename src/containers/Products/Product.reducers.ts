import * as types from './Product.constants';
import produce from 'immer';

const products = [] as Product[];

const initialState = {
  loading: true,
  error: {},
  product: null,
  products: products,
};

export const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_PRODUCTS:
        draft.products = payload;
        draft.loading = false;
        break;
      case types.GET_PRODUCT:
        draft.product = payload;
        draft.loading = false;
        break;
      case types.CREATE_PRODUCT:
        draft.products = [payload, ...state.products];
        draft.loading = false;
        break;
      case types.UPDATE_PRODUCT:
        draft.product = payload;
        draft.loading = false;
        break;
      case types.DELETE_PRODUCT:
        draft.products = state.products.filter(p => p.id !== payload);
        draft.loading = false;
        break;
      case types.PRODUCT_ERROR:
        draft.error = payload;
        draft.loading = false;
        draft.products = [];
        draft.product = null;
        break;

      case types.CLEAR_PRODUCT:
        draft.product = null;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
