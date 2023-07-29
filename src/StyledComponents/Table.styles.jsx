import styled from 'styled-components';

export const MAINTABLE = styled.div`
  margin-top: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 0 3rem 0;

  table {
    margin: 0 auto;
    width: 95%;
    margin-top: 15px;
    text-align: center;
    overflow:hidden;
    border-collapse:collapse;
    -webkit-border-radius: 12px;
      -moz-border-radius: 12px;
            border-radius: 12px;
  }
`;

export const H1 = styled.h1`
  color: var(--primary-color);
`;

export const Th = styled.th`
  color: black;
  padding: 1.5rem;
  font-size: 1.3rem;
  box-sizing: border-box;
  font-weight: 500;

`;

export const TR = styled.tr`
  background-color: #30ffc1;

`;

export const MainButton = styled.td`
  margin-left: 50px;
  gap: 10px;
  padding: 0.6rem;
  
`;

export const BUTTON = styled.button`
  background-color: ${(props) => (props.delete ? 'red' : 'yellow')};
  padding: 0.6rem;
  border-radius: 5px;
  border: 1px solid gray;
  transition: 0.3s;
  color: ${(props) => (props.delete ? 'white' : 'black')};
  font-size: 1rem;
  font-weight: 700;
  margin: 3px;
  width: 43%;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;
export const TRTABLE = styled.tr`
  background-color: #d5d7d7eb;
  color: black;
  font-weight: 700;
`;

export const EXPENSE = styled.p`
  margin: 0 auto;
`;
