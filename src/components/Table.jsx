/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, editExpenses, idEdit } from '../redux/actions';
import { MAINTABLE,
    H1,
    Th,
    TR,
    BUTTON,
    MainButton,
    TRTABLE,
    EXPENSE } from '../StyledComponents/Table.styles';

function Table() {
  const dispatch = useDispatch();
  const addExpense = useSelector(({ wallet: { expenses } }) => expenses);

  const handleClick = (id) => {
    dispatch(removeTask(id));
  };

  const handleClickEdit = (id) => {
    dispatch(editExpenses(id));
    dispatch(idEdit(id));
  };

  return (
    <MAINTABLE>
      <div>
        <H1>Lista de despesas</H1>
      </div>
      { addExpense.length >= 1
       ? <table>
         <thead>
           <TR>
             {
              ['Descrição',
                'Tag',
                'Método de pagamento',
                'Valor',
                'Moeda',
                'Câmbio utilizado',
                'Valor convertido',
                'Moeda de conversão',
                'Editar/Excluir'].map((item) => (
                // eslint-disable-next-line indent
                  <Th key={ item }>
                    {item}
                  </Th>
              ))
            }
           </TR>
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
          }, index) => (
            <TRTABLE key={ id }>
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
              <MainButton>
                <BUTTON
                  data-testid="edit-btn"
                  onClick={ () => handleClickEdit(id) }
                >
                  Editar
                </BUTTON>
                <BUTTON
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => handleClick(index) }
                  delete
                >
                  Excluir
                </BUTTON>
              </MainButton>
            </TRTABLE>
          ))}
         </tbody>
       </table>
      : <EXPENSE>Sem nenhuma despesa</EXPENSE>}
    </MAINTABLE>
  );
}

export default Table;
