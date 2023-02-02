import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header({ ValorDoMapState }) {
  return (
    <div>
      <h2 data-testid="email-field">
        {ValorDoMapState}
      </h2>
      <p data-testid="total-field">0</p>
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
