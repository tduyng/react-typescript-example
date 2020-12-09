import * as types from './Product.constants';

const products = [] as Product[];
const initialState = {
  loading: true,
  error: {},
  product: null,
  products: products,
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case types.GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case types.CREATE_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
      };
    case types.UPDATE_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== payload),
        loading: false,
      };
    case types.PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        products: [],
        product: null,
      };
    case types.CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
        loading: false,
      };

    default:
      return state;
  }
};
