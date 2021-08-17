import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  padding: 70px 100px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background-image: url('meubichinho.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Img = styled.img``;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-left: 20px;
  color: #123282;
`;

export const Content = styled.div`
  width: 460px;
`;

export const Description = styled.h1`
  font-size: 48px;
  font-weight: 700;

  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const JoinButton = styled.a`
  width: max-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: #fff;
  border: none;
  border-radius: 10px;

  padding: 10px;

  font-weight: bold;
  text-align: center;
  cursor: pointer;

  font-size: 48px;

  color: #123282;
  text-decoration: none;
  transition: all 0.2s;

  :hover {
    background: #123282;
    color: #fff;
    cursor: pointer;
  }
`;

export const Button = styled(JoinButton)`
  font-size: 24px;
  background: transparent;
  padding: 0;

  :hover {
    background: transparent;
  }

  > svg {
    margin-left: 5px;
  }
`;
