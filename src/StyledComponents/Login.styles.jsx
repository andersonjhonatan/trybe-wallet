import styled from 'styled-components';

export const MAINGENERAL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  figure {
    display: flex;
  }
`;

export const MAIN = styled.div`
  background-color: var(--primary-color);
  width: 33rem;
  border-radius: 2rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 0 1rem 0;
  margin-right: 4rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;

  }

  form > label > input {
    outline: none;
    border: none;
    display: flex;
    width: 28rem;
    margin: 0rem 2rem 0 2rem;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 1px 1px 0 white;
    font-size: 1.5rem;
    text-align:center
  }

  form > label > input::placeholder {
    text-align: center;
    font-size: 1rem;
  }
`;

export const P = styled.p`
    margin: 0 1rem 6rem 1rem;
    display: center;
    justify-content: center;
    color: #92e3a9;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

export const BUTTON = styled.button`
  height: 3rem;
  width: 12rem;
  border-radius: 1rem;
  border: none;
  font-size: 1.2rem;
  transition: 0.5s;
  padding: 1rem;
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${(props) => (props.disabled === false ? '#92e3a9' : 'null')};
    color: ${(props) => (props.disabled === false ? '#010101' : 'null')};
    cursor: pointer;
  }
  `;
