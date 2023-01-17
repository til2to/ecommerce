import { SET_PRODUCTS_LENGTH } from '../Types';


let totalProducts = JSON.parse(window.localStorage.getItem('totalProducts')) || 0;

const initialState = {
  productsLength: totalProducts,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LENGTH:
      let productsLength = action.payload
      window.localStorage.setItem('productsLength', JSON.stringify(productsLength))

      return productsLength;

    default:
      return state;
  }
}