// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_CURRENCIES,
  ADD_EXPENSES,
  REMOVE_TASK,
  EDIT_EXPENSES,
  ID_EDIT,
} from '../actions';

const INICIO = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const currReducer = (state = INICIO, action) => {
  const objeto = {
    id: state.expenses.length === 0 ? 0 : state.expenses.length,
    ...action.payload,
  };

  switch (action.type) {
  case ADD_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSES:
    return { ...state, expenses: [...state.expenses, objeto] };
  case REMOVE_TASK:
    return { ...state, expenses: state.expenses.filter((task, i) => i !== action.index) };
  case ID_EDIT:
    return { ...state, idToEdit: action.index };
  case EDIT_EXPENSES:
    return { ...state, editor: state.expenses.filter((task, i) => i === action.payload) };
  default:
    return state;
  }
};

// state.expenses.filter((task, i) => i === action.payload);

export const listaDeCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = Object.keys(data).filter((index) => index !== 'USDT');
  dispatch({ type: ADD_CURRENCIES, currencies });
};

export default currReducer;
