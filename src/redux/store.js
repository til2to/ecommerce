import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducers';
import { currencyReducer } from '../reducers/currencySwitchReducers';
import { paginationReducer } from '../reducers/paginationReducers';
import { productsCategory } from '../reducers/displayProductsReducers';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Add the two reducers to the store
const store = createStore(
  combineReducers({
    cart: cartReducer,
    currency: currencyReducer,
    pagination: paginationReducer,
    products: productsCategory, 
  }),
     
  composeEnhancer(applyMiddleware(thunk))
);

export default store;