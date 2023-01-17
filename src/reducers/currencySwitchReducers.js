import { CHANGE_CURRENCY } from '../Types';


/* get the current currency and store */ 
let currency = JSON.parse(window.localStorage.getItem('SelectedCurrency'));

const initialState = {
  currentCurrency: currency,
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      /* set the state's currency to the current currecy from the action */ 
      currency = action.payload
      /* set the current currency to the local storage */ 
      window.localStorage.setItem('SelectedCurrency', JSON.stringify(currency))
      /* Reset the total amount to zero as currency changes */ 
      window.localStorage.setItem('total', 0)

      /* Get the cart data from the local storage */ 
      let products = JSON.parse(window.localStorage.getItem('data')) || []
      /* declare an array to hold all the prices of all products in cart 
        based on the current currency */
      let productAmount, value = []; 
      /* Re-calculate the total amount all products based on current currency */ 
      products.forEach((product, index) => {
        productAmount = (product.prices[currency].amount * product.count) 
        value.push(productAmount)
      })
      const sum = value.reduce(
        (initialValue, currentValue) => initialValue + currentValue, 0
      );
      /* reset the current total to the local storage */ 
      window.localStorage.setItem('total', JSON.stringify(sum))
    
      return currency

    default:
      return state;
  }
}