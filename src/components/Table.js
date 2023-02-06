import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const addExpense = useSelector(({ wallet: { expenses } }) => expenses);
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
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {addExpense.map(({
            id,
            value,
            method,
            tag,
            description,
            exchangeRates,
            currency,
          }) => (
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
                <button>Editar</button>
              </td>
              <td>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
