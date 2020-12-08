import axios from 'axios';
import { URL } from 'src/constants/urls';
import * as actions from './Product.actions';
import { v4 as uuid } from 'uuid';

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get(`${URL.baseAPIUrl}/api/products`);
    const products = res.data;
    dispatch(actions.getProductsSuccess(products));
  } catch (error) {
    const payload = {
      msg: error.response?.statusText,
      status: error.response?.status,
    };
    dispatch(actions.productError(payload));
  }
};

export const getProduct = id => async dispatch => {
  try {
    console.log('Get Product triggered');
    const res = await axios.get(`${URL.baseAPIUrl}/api/products/${id}`);
    const product = res.data as Product;
    dispatch(actions.getProductSuccess(product));
  } catch (error) {
    const payload = {
      msg: error.response?.statusText,
      status: error.response?.status,
    };
    dispatch(actions.productError(payload));
  }
};

export const createProduct = (formData: ProductForm) => async dispatch => {
  try {
    const newProduct = {
      id: uuid(),
      ...formData,
    };
    await axios.post(`${URL.baseAPIUrl}/api/products`, newProduct);
    dispatch(actions.createProductSuccess(newProduct));
  } catch (error) {
    const payload = {
      msg: error.response?.statusText,
      status: error.response?.status,
    };
    dispatch(actions.productError(payload));
  }
};

export const deleteProduct = (id: string) => async dispatch => {
  try {
    await axios.delete(`${URL.baseAPIUrl}/api/products/${id}`);
    dispatch(actions.deleteProductSuccess(id));
  } catch (error) {
    const payload = {
      msg: error.response?.statusText,
      status: error.response?.status,
    };
    dispatch(actions.productError(payload));
  }
};
