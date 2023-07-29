import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testing Wallet', () => {
  it('testing components on screen', () => {
    renderWithRouterAndRedux(<Wallet />);
    const tituloBRL = screen.getByTestId('header-currency-field');
    expect(tituloBRL).toBeInTheDocument();
    expect(tituloBRL.innerHTML).toContain('BRL');
  });

  it('test formulario na tela da rota /carteira', async () => {
    let dispatch;
    renderWithRouterAndRedux(<Wallet />);
    const inputValor = screen.getByTestId('value-input');
    userEvent.type(inputValor, '40');
    expect(inputValor).toBeInTheDocument();
    const inputDescription = screen.getByTestId('description-input');
    userEvent.type(inputDescription, 'almoço');
    expect(inputDescription).toBeInTheDocument();
    const selectCurrency = screen.getByTestId('currency-input');
    await waitFor(() => { expect(selectCurrency).toHaveValue('USD'); });
    userEvent.selectOptions(selectCurrency, 'USD');
    expect(selectCurrency).toBeInTheDocument();
    const selectMethod = screen.getByTestId('method-input');
    expect(selectMethod).toBeInTheDocument();
    userEvent.selectOptions(selectMethod, 'Dinheiro');
    const tag = screen.getByTestId('tag-input');
    expect(tag).toBeInTheDocument();
    userEvent.selectOptions(tag, 'Alimentação');
    const buttonAdd = screen.getByRole('button', { name: 'Adicionar despesa' });
    expect(buttonAdd).toBeInTheDocument();
    userEvent.click(buttonAdd);
    fireEvent.click(screen.getByTestId('delete-btn'));
    expect(dispatch).toHaveBeenCalledWith(removeTask(0));
  });
});
