import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: linear-gradient(155.85deg, #F44A87 45.83%, #FFB930 100%);
    height: 100%;
`;

export const Content = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
     width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: var(--title);
    font-weight: 700;

    border-bottom: 1px solid #D3E2E5;
    margin-bottom: 40px;
    padding-bottom: 24px;
    text-align: flex-start;
    `;

export const Form = styled.div`
    width: 700px;
    margin: 64px auto;

    background: #FFFFFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;