import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listaDeCurrencies } from '../redux/reducers/wallet';
import { addExpenses, updateExpenses } from '../redux/actions';
import { MAINWALLET,
  FORM,
  Select,
  Button } from '../StyledComponents/WalletForm.styles';

function WalletForm() {
  const [form, setForm] = useState({
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  });
  const moedas = useSelector(({ wallet: { currencies } }) => currencies);
  const edtExpense = useSelector(({ wallet: { editor } }) => editor);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listaDeCurrencies());
  }, [dispatch]);

  const handleSumnit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const objeto = { ...form, exchangeRates: data };
    dispatch(addExpenses(objeto));
    setForm({ ...form, value: '', description: '' });
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form, [name]: value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateExpenses(form));
  };

  return (
    <MAINWALLET>
      <FORM>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            onChange={ handleChange }
            name="value"
            value={ form.value || '' }
            placeholder="Digite o valor"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <Select
            data-testid="currency-input"
            onChange={ handleChange }
            name="currency"
            value={ form.currency || '' }
          >
            {moedas?.map((item, index) => (
              <option key={ index }>{item}</option>
            ))}
          </Select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          <Select
            method
            data-testid="method-input"
            onChange={ handleChange }
            name="method"
          >
            {
              ['Dinheiro', 'Cartão de débito', 'Cartão de crédito'].map((item) => (
                <option key={ item }>{item}</option>
              ))
            }
          </Select>
        </label>
        <label htmlFor="tag-input">
          Tag:
          <Select
            method
            data-testid="tag-input"
            onChange={ handleChange }
            name="tag"
            value={ form.tag || '' }
          >
            {
              ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'].map((item) => (
                <option key={ item }>{item}</option>
              ))
            }
          </Select>
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
        {!edtExpense
          ? (
            <Button
              type="submit"
              onClick={ handleSumnit }
            >
              Adicionar despesa
            </Button>
          )
          : (
            <Button
              type="submit"
              onClick={ handleEdit }
              primary
            >
              Editar despesa
            </Button>
          )}
      </FORM>
    </MAINWALLET>
  );
}

export default WalletForm;
