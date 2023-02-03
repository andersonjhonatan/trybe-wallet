// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES } from '../actions';

const INICIO = {
  currencies: [],
};

const currReducer = (state = INICIO, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export const listaDeCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  /* console.log(data); */
  const currencies = Object.keys(data).filter((index) => index !== 'USDT');
  /* console.log(currencies); */
  dispatch({ type: ADD_CURRENCIES, currencies });
};
listaDeCurrencies();

export default currReducer;
