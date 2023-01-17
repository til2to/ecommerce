import * as actions from '../Types';


let product = JSON.parse(window.localStorage.getItem('product')) || {};
let index = JSON.parse(window.localStorage.getItem('categoryIndex'));

const initialState = {
  categoryIndex: index,
  product: product,
};

export const productsCategory = (state = initialState, action) => {
  switch (action.type) {
    case actions.DISPLAY_PRODUCTS_CATEGORIES:
      let categoryIndex = action.payload
      window.localStorage.setItem('categoryIndex', JSON.stringify(categoryIndex))
      return categoryIndex;

    case actions.PRODUCT_PAGE:
      let currentProduct = action.payload;
      window.localStorage.setItem('product', JSON.stringify(currentProduct))
      
      return currentProduct;

    default:
      return state;
  }
}