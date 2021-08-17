import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import MeuBichinho from '../../assets/logo.svg';
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  Description,
  Img,
  JoinButton,
  Logo,
  Title,
} from './styles';

export function LandingPage() {
  return (
    <Container>
      <div>
        <Logo>
          <Img src={MeuBichinho} alt="Meu bichinho" />
          <Title>meu bichinho</Title>
        </Logo>
        <Content>
          <Description>
            O site para você encontrar seu companheirinho
          </Description>
        </Content>
        <JoinButton href="/map">Visitar</JoinButton>
      </div>

      <ButtonContainer>
        <Button href="/map">
          Login ONG <FiLogIn />
        </Button>
        <Button href="/map">Registrar ONG</Button>
      </ButtonContainer>
    </Container>
  );
}
