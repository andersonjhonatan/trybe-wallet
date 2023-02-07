import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const valorExpenses = useSelector(({ wallet: { expenses } }) => expenses)
    .reduce((acc, cur) => acc + (+cur.value * cur.exchangeRates[cur.currency].ask), 0)
    .toFixed(2);
  const users = useSelector(({ user }) => user.email);

  return (
    <div>
      <h2 data-testid="email-field">
        {users}
      </h2>
      <p data-testid="total-field">{valorExpenses}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}
export default (Header);
