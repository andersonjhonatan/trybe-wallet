import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addEmail } from '../redux/actions';
import { MAIN, MAINGENERAL, BUTTON, P } from '../StyledComponents/Login.styles';
import login from '../assets/login.png';
import wallet from '../assets/Wallet.png';

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

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  return (
    <MAINGENERAL>
      <figure>
        <img src={ login } alt="imagem de repesentação" height={ 800 } />
      </figure>
      <MAIN>
        <form>
          {!disabled ? (
            <figure>
              <img
                src={ wallet }
                alt="imagem da carteira"
                height={ 320 }
              />
            </figure>

          ) : (
            <P>
              Para fazer login preencha um email válido e
              digite uma senha de no mínimo 6 caracteres.
            </P>
          )}
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
          <BUTTON type="button" disabled={ disabled } onClick={ handleSubmit }>
            Entrar
          </BUTTON>
        </form>
      </MAIN>
    </MAINGENERAL>
  );
}
export default connect()(Login);
