export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const addMoedas = (currencies) => ({
  type: ADD_CURRENCIES,
  payload: currencies,
});
