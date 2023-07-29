import styled from 'styled-components';

export const MAINWALLET = styled.div`
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 1.4rem;
  align-items: center;
  margin-bottom: 3rem;

  h2 {
    margin: 0 0 0 3rem;
    letter-spacing: 0.5px;
    padding: 2rem;
  }
`;

export const SPANN = styled.span`
  color: #30ffd6;
  margin-left: 0.6rem;
  font-weight: bolder;
`;

export const VALORES = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: 3rem;
  font-weight: bolder;
  font-size: 1.4rem;
  p {
    margin-block-start: 0;
    margin-block-end: 9px;
  }
`;

export const P = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-right:  3rem;
  font-size: 12px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #cbcaca;
  box-shadow: 0 0 2px 0;
`;

export const IMG = styled.img`
  border-radius: 30% 70% 70% 30% / 30% 40% 60% 70%;
`;
