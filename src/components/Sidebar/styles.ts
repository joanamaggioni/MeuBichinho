import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Img = styled.img`
    width: 48px;    
`;

export const Content = styled.footer`
    width: 48px;
    height: 48px;
  
    border:0;
  
    background: var(--pink);
    border-radius: 16px;
  
    cursor: pointer;
  
    transition: background-color 0.2s;
  
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        filter: brightness(120%);
    }
`;

export const Button = styled.button`
    background: var(--pink);
    border: none;
    cursor: pointer;
`;