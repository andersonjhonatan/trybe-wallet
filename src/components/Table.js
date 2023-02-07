import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, editExpenses, idEdit } from '../redux/actions';

function Table() {
  const addExpense = useSelector(({ wallet: { expenses } }) => expenses);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeTask(id));
  };

  const handleClickEdit = (id) => {
    dispatch(editExpenses(id));
    dispatch(idEdit(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {addExpense?.map(({
            id,
            value,
            method,
            tag,
            description,
            exchangeRates,
            currency,
          }, index) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              {
                value > 0
                  ? <td>{`${parseFloat(value).toFixed(2)}`}</td>
                  : <td>0</td>
              }
              <td>{exchangeRates[currency].name}</td>
              <td>{(+(exchangeRates[currency].ask)).toFixed(2)}</td>
              <td>{+(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  onClick={ () => handleClickEdit(id) }
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => handleClick(index) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
