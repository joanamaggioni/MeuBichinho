import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #00A1FF 0%, #38B6FF 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 48px;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: var(--pink);
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: all 0.2s;

  :hover {
    background: ${darken(0.1, '#f44a87')};
  }
`;
