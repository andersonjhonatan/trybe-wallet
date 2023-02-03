import React, { useState, useEffect } from 'react';

function WalletForm() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currenciesArray = Object.keys(data).filter((currency) => currency !== 'USDT');
      setCurrencies(currenciesArray);
    }

    fetchData();
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="value-input">
          Valor:
          <input data-testid="value-input" type="number" />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select data-testid="currency-input">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Metodo de Pagamento:
          <select data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input data-testid="description-input" type="text" />
        </label>
        <button type="button">Adicionar Despesa</button>
      </form>
      <div>
        <h3>Descrição</h3>
        <p>Tag</p>
      </div>
    </div>
  );
}

export default WalletForm;
