import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testando pagina Login', () => {
  it('teste da rota /', () => {
    const initialState = {
      user: { email: '' },
    };
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/'], initialState });
    const emailInputContainer = screen.getByTestId('email-input');
    expect(emailInputContainer).toBeInTheDocument();
    userEvent.type(emailInputContainer, 'alguem@alguem.com');
    const passworInput = screen.getByTestId('password-input');
    expect(passworInput).toBeInTheDocument();
    userEvent.type(passworInput, '123456');
    const enter = screen.getByRole('button', { name: 'Entrar' });
    expect(enter).toBeInTheDocument();
    userEvent.click(enter);
    act(() => {
      history.push('/carteira');
    });
    act(() => { history.push('/carteira'); });
  });
});
