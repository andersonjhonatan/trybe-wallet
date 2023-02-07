import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addEmail } from '../redux/actions';

function Login() {
  const number = 6;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [disabled, setDisabled] = useState(true);

  const validacaoEmail = /\S+@\S+\.\S+/.test(email);
  const validacaoSenha = senha.length >= number;
  useEffect(() => {
    if (validacaoEmail && validacaoSenha) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [validacaoEmail, validacaoSenha]);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  return (
    <div>
      <form>
        <label htmlFor="email-input">
          <input
            type="email"
            data-testid="email-input"
            placeholder="Insira seu E-mail"
            onChange={ (e) => setEmail(e.target.value) }
            required
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            data-testid="password-input"
            placeholder="Insira sua Senha"
            onChange={ (e) => setSenha(e.target.value) }
            required
            value={ senha }
          />
        </label>
        <button type="submit" disabled={ disabled } onClick={ handleSubmit }>
          Entrar
        </button>
      </form>
    </div>
  );
}
export default connect()(Login);
