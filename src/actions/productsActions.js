import { DISPLAY_PRODUCTS_CATEGORIES, PRODUCT_PAGE } from '../Types';


export const productsCategoryBased = (payload) => ({
  type: DISPLAY_PRODUCTS_CATEGORIES,
  payload
});

export const productPage = (payload) => ({
  type: PRODUCT_PAGE,
  payload
});