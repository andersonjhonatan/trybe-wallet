export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_SENHA = 'ADD_SENHA';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});
export const addSenha = (senha) => ({
  type: ADD_SENHA,
  payload: senha,
});
