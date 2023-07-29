// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_CURRENCIES,
  ADD_EXPENSES,
  REMOVE_TASK,
  EDIT_EXPENSES,
  ID_EDIT,
  UPDATE_EXPENSES,
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
    return { ...state, editor: true };
  case UPDATE_EXPENSES:
    return ({
      ...state,
      expenses: state.expenses.map((task) => {
        if (task.id === state.idToEdit) {
          return {
            ...action.payload,
            id: state.idToEdit,
            exchangeRates: task.exchangeRates };
        }
        return task;
      }),
      editor: false,
    });
  default:
    return state;
  }
};

/* expenses: state.expenses.map((item) => {
        if (item.id === state.idToEdit) {
          return {
            id: state.idToEdit,
            ...action.payload,
            exchangeRates: item.exchangeRates };
        }
        return item;
      }),
      editor: false,
    }; */

// state.expenses.filter((task, i) => i === action.payload);

export const listaDeCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = Object.keys(data).filter((index) => index !== 'USDT');
  dispatch({ type: ADD_CURRENCIES, currencies });
};

export default currReducer;
