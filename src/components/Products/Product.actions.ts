import * as types from './Product.constants';

export const getProductsSuccess = (payload: Product[]) => ({
  type: types.GET_PRODUCTS,
  payload,
});

export const getProductSuccess = (payload: Product) => ({
  type: types.GET_PRODUCT,
  payload,
});

export const createProductSuccess = (payload: Product) => ({
  type: types.CREATE_PRODUCT,
  payload,
});

export const editProductSuccess = (payload: Product) => ({
  type: types.EDIT_PRODUCT,
  payload,
});

export const updateProductSuccess = (payload: Product) => ({
  type: types.UPDATE_PRODUCT,
  payload,
});

export const deleteProductSuccess = () => ({
  type: types.DELETE_PRODUCT,
});

export const productError = (payload: ProductError) => ({
  type: types.PRODUCT_ERROR,
  payload,
});

export const clearProductSuccess = () => ({
  type: types.CLEAR_PRODUCT,
});
