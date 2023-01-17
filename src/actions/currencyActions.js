import { CHANGE_CURRENCY, } from '../Types';


export const changeCurrency = (currentCurrency) => ({
  type: CHANGE_CURRENCY,
  payload: currentCurrency
});
