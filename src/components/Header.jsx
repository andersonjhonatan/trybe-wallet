/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { useSelector } from 'react-redux';
import { MAINWALLET, SPANN, VALORES, P, IMG } from '../StyledComponents/Header.styles';
import saving from '../assets/saving.png';
import expense from '../assets/expenses.jpg';

function Header() {
  const valorExpenses = useSelector(({ wallet: { expenses } }) => expenses)
    .reduce((acc, cur) => acc + (Number(cur.value) * cur.exchangeRates[cur.currency]
      .ask), 0)
    .toFixed(2);
  const users = useSelector(({ user }) => user.email);

  return (
    <MAINWALLET>
      <figure>
        {valorExpenses >= 1
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          ? <IMG
            src={ expense }
            alt="image como uma logo"
            height={ 100 }
          />
          : <img
              src={ saving }
              alt="imagem como uma logo"
              height={ 100 }
          />}
      </figure>
      <h2 data-testid="email-field">
        Bem vindo
        <SPANN>{users}</SPANN>
      </h2>
      <div>
        <VALORES>
          <p data-testid="total-field">
            Total:
            <SPANN>{valorExpenses}</SPANN>
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </VALORES>
        <div>
          <P>Total de despesas</P>
        </div>
      </div>
    </MAINWALLET>
  );
}
export default (Header);
