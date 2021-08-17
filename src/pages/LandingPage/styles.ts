import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: relative;
    padding: 25px;
    width: 100vw;

    height: 100vh;

    display:flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    /* background: url('../../assets/meubichinho.svg') no-repeat 100%; */
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const Img = styled.img`

`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 900;
    margin-left: 20px;
    color:#123282;
`;

export const Content = styled.div`
    width:480px;
    padding: 20px;
`;

export const Description = styled.h1`
    font-size: 36px;
    font-weight: 900;
    margin-left: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    border-radius: 10px;
    
    font-weight: bold;
    text-align: center;
    font-size: 28px;
    cursor: pointer;
    

    :first-child {
        font-size: 36px;
    }

    :hover {
        background: #29B6;
        border: none;
        color: #123282;
        font-weight: bold;
        text-align: center;
    
        cursor: pointer;
    }
    
    a {
        color: #123282;
        text-decoration: none;
    }
`;