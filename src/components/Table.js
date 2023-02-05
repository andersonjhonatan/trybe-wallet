import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const addExpense = useSelector(({ wallet: { expenses } }) => expenses);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Método de pagamento</th>
            <th>Tag</th>
            <th>Descrição</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {addExpense.map(({
            id,
            value,
            currency,
            method,
            tag,
            description,
          }) => (
            <tr key={ id }>
              <td>{value}</td>
              <td>{currency}</td>
              <td>{method}</td>
              <td>{tag}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
