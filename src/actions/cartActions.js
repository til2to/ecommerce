import { ADD_TO_CART, ADD_COUNT, SUB_COUNT, } from '../Types';


export const addToCart = (currentProduct) => ({
  type: ADD_TO_CART,
  payload: currentProduct
});

export const addCount = (payload) => ({
  type: ADD_COUNT,
  payload
});

export const subCount = (payload) => ({
  type: SUB_COUNT,
  payload
});
