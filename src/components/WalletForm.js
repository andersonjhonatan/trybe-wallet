import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listaDeCurrencies } from '../redux/reducers/wallet';

function WalletForm() {
  const moedas = useSelector(({ wallet: { currencies } }) => currencies);
  console.log(moedas);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listaDeCurrencies());
  }, [dispatch]);

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
            {moedas.map((item, index) => (
              <option key={ index }>{item}</option>
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
