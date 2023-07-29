import styled from 'styled-components';

export const MAINWALLET = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  color: #060606;
  font-size: 1.4rem;
  font-family: 'Lucida Sans',
  'Lucida Sans Regular',
  'Lucida Grande',
    'Lucida Sans Unicode',
    Geneva, Verdana,
    sans-serif;
`;

export const FORM = styled.form`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  label > input {
    background-color: #ffffff;
    padding: 0.8rem;
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px 0px var(--primary-color) ;
    border-radius: 0.3rem;
    width: 10rem;
    font-size: 1.2rem;
    transition: 0.2s;
    &:focus {
      background-color: #41ffa946;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
  }

  option {
    background-color: #ffffff;
    border-radius: 0.3rem;
    font-size: 1.2rem;
    text-align: center;
    padding: 9px;
  }
`;

export const Select = styled.select`
  background-color: #ffffff;
    padding: 0.8rem;
    outline: none;
    border: none;
    box-shadow: 1px 1px 5px 0px var(--primary-color) ;
    border-radius: 0.3rem;
    width: ${(props) => (props.method
    ? '12rem'
    : '6rem')};
    font-size: 1rem;
    transition: 0.2s;
    &:focus {
      background-color: #41ffa946;
    }

`;

export const Button = styled.button`
    background-color: ${(props) => (props.primary
    ? '#ffe261'
    : 'var(--primary-color)')};
    width: 12rem;
    border: none;
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    border-radius: 0.4rem;
    color: ${(props) => (props.primary
    ? 'black'
    : 'white')};
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      background-color: #30ffd6;
      color: black;
    }
`;
