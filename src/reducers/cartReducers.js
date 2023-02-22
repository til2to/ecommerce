import * as actions from '../Types';

/* get products and total price from local storage */ 
let currentCart = JSON.parse(window.localStorage.getItem('data')) || [];
let currentTotal = JSON.parse(window.localStorage.getItem('total')) || 0;

/* function to thoroughly check if attributes of products are equal irrespective of order*/
const isEqual = (productAttribute_1, currentProduct_attributes) => {
  return (
    productAttribute_1.length === currentProduct_attributes.length &&
    productAttribute_1.every((element_1) =>
    currentProduct_attributes.some((element_2) =>
      Object.keys(element_1).every((key) => 
      element_1[key] === element_2[key]))
    )
  );
}

const initialState = {
  cart: currentCart, // set the cart to the local storage data array
  quantity: currentCart.length,
  total: currentTotal,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const currentProduct = action.payload
      let amountIndex = parseInt(window.localStorage.getItem('SelectedCurrency'))
      
      let exist = false 
      // check if item exist
      currentCart.forEach((localProduct) => { 
        if(isEqual(currentProduct.attributes, localProduct.attributes))
        {
          exist = true;
          let local_total = JSON.parse(window.localStorage.getItem('total')) || 0
          /* update the amount */
          local_total += currentProduct.prices[amountIndex].amount;
          /* update the total amount as the count increases */ 
          window.localStorage.setItem('total', JSON.stringify(local_total))
          /* increase the count of the current product if it exist */ 
          localProduct.count = localProduct.count + 1
          /* update the local storage or the cart */ 
          window.localStorage.setItem('data', JSON.stringify(currentCart))
        }
      })

      // item not in cart
      if (exist === false) {
        // set cart quantity
        state.quantity += 1
        
        let amountIndex = parseInt(window.localStorage.getItem('SelectedCurrency')) || 0
        /* if product does not exist add product to cart or local 
        storage but always the current product at index 0 */ 
        currentCart.unshift(currentProduct)
        window.localStorage.setItem('data', JSON.stringify([...currentCart]))

        let local_total = JSON.parse(window.localStorage.getItem('total'))
        /*set the amount */ 
        local_total += currentProduct.prices[amountIndex].amount 
        // set the total amount 
        window.localStorage.setItem('total', JSON.stringify(local_total))
        
        return {
          ...state,
          cart: [...currentCart]
        }
      }
      return {
        ...state,
        cart: [...currentCart]
      }
    }
      
    case actions.ADD_COUNT: {
      let attributes = action.payload
      let priceIndex = JSON.parse(window.localStorage.getItem('SelectedCurrency'))
      let localTotal = JSON.parse(window.localStorage.getItem('total'))

      /* Use the current product's attributes to check against the local 
      storage or cart if there's a match, meaning product exist */
      
      currentCart.forEach((localProduct) => {  
        if(isEqual(attributes, localProduct.attributes)){
          /* if current product has a match, increase count key by 1 */ 
          localProduct.count = localProduct.count + 1
          /* update product by updating the local storage */ 
          window.localStorage.setItem('data', JSON.stringify(currentCart))
          /* if current product has a match, update the total amount */ 
          localProduct.count >= 1 && (localTotal += localProduct.prices[priceIndex].amount)
          window.localStorage.setItem('total', JSON.stringify(localTotal))
        }
      })

      return {
        ...state,
        cart: [...state.cart]
      }
    }

    case actions.SUB_COUNT: {
      let currentAttributes = action.payload
      let price_Index = parseInt(window.localStorage.getItem('SelectedCurrency'))
      let localTotal_sub = JSON.parse(window.localStorage.getItem('total'))
      
      /* Use the current product's attributes to check against the local 
        storage or cart if there's a match, meaning product exist */
      currentCart.map((localObj, index) => {
        if(isEqual(currentAttributes, localObj.attributes)){
          if(localObj.count === 0){
            /* remove product from cart if product count is zero */ 
            currentCart.splice(index, 1)
            // update the cart quantity
            state.quantity -= 1
            return window.localStorage.setItem('data', JSON.stringify(currentCart))
          }
          /* decrease product count but don't go below zero */ 
          localObj.count !== 0 && (localObj.count -= 1)
          /* update product count by updating the local storage */ 
          window.localStorage.setItem('data', JSON.stringify(currentCart))
          /* As product count decreases, decrease total amount but not below zero */ 
          if(localTotal_sub > 0) {
            localTotal_sub -= localObj.prices[price_Index].amount
          }
          /* update total amount */ 
          window.localStorage.setItem('total', JSON.stringify(localTotal_sub))
        }
        return null
      })

      return {
        ...state,
        cart: [...currentCart]
      }
    }

    default:
      return state;
  }
}