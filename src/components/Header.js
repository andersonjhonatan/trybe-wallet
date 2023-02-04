import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Header({ ValorDoMapState }) {
  const sumExpenses = useSelector(({ wallet: { expenses } }) => expenses)
    .reduce((acc, cur) => acc + (+cur.value * cur.exchangeRates[cur.currency].ask), 0)
    .toFixed(2);

  return (
    <div>
      <h2 data-testid="email-field">
        {ValorDoMapState}
      </h2>
      <p data-testid="total-field">{sumExpenses}</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}
const mapStateToProps = ({ user: { email } }) => ({
  ValorDoMapState: email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  ValorDoMapState: PropTypes.string.isRequired,
};
