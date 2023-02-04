import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listaDeCurrencies } from '../redux/reducers/wallet';
import { addExpenses } from '../redux/actions';

function WalletForm() {
  const [form, setForm] = useState({
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  });
  const moedas = useSelector(({ wallet: { currencies } }) => currencies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listaDeCurrencies());
  }, [dispatch]);

  const handleSumnit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const objeto = {
      ...form,
      exchangeRates: data,
    };
    dispatch(addExpenses(objeto));
    setForm({ ...form, value: '', description: '' });
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form, [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={ handleSumnit }>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            onChange={ handleChange }
            name="value"
            value={ form.value || '' }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            data-testid="currency-input"
            onChange={ handleChange }
            name="currency"
            value={ form.currency || '' }
          >
            {moedas.map((item, index) => (
              <option key={ index }>{item}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Metodo de Pagamento:
          <select
            data-testid="method-input"
            onChange={ handleChange }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag:
          <select
            data-testid="tag-input"
            onChange={ handleChange }
            name="tag"
            value={ form.tag || '' }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            onChange={ handleChange }
            name="description"
            value={ form.description || '' }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
