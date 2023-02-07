export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_TASK = 'REMOVE_TASK';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const ID_EDIT = 'ID_EDIT';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addMoedas = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: expenses,
});

export const removeTask = (index) => ({
  type: REMOVE_TASK,
  index,
});

export const editExpenses = (payload) => ({
  type: EDIT_EXPENSES,
  payload,
});

export const idEdit = (index) => ({
  type: ID_EDIT,
  index,
});
