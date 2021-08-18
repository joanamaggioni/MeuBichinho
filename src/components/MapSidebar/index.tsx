import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Text, Container, Content, Img, Span, Button, LogoDiv } from './styles';

export function MapSidebar() {
  const { goBack } = useHistory();

  return (
    <Container>
      <div>
        <LogoDiv>
          <Img src={Logo} alt="Meu bichinho" /> <h1> meu bichinho</h1>
        </LogoDiv>
        <Text>Dê uma explorada no mapa de Chapecó</Text>
        <Span>Pode ter algum bichinho esperando por você</Span>
      </div>
      <Content>
        <Button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="rgba(255,255,255,0.7)" />
        </Button>
      </Content>
    </Container>
  );
}
