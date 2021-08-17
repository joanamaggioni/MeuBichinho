import styled from 'styled-components';

export const Container = styled.aside`
    height: 100vh;
    width: 440px;
    background: linear-gradient(329.54deg, #00A1FF 0%, #38B6FF 100%);
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 124px;

    color: var(--dark_blue);
`;

export const Img = styled.img`
    max-width: 190.5px;
    height: 72px;
`;

export const Text = styled.h2`
    font-size: 36px;
    font-weight: 800;
    line-height: 42px;
`;

export const Span = styled.p`
    font-weight: 300;
    line-height: 28px;
    margin-top: 24px;
    font-size: 18px;
`; 

export const Content = styled.footer`
    width: 48px;
    height: 48px;
  
    border:0;
  
    background: var(--pink);
    border-radius: 16px;
  
    cursor: pointer;
  
    transition: all 0.2s;
  
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        filter: brightness(120%);
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--pink);
    border: none;
    cursor: pointer;
`;