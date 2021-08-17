import React from 'react';
import { Link } from 'react-router-dom';
import MeuBichinho from '../../assets/logo.svg';
import {GrLinkNext} from 'react-icons/gr'
import { Button, ButtonContainer, Container, Content, Description, Img, Logo, Title } from './styles';

export function LandingPage() {
    return (
        <Container>
            <Logo>
                <Img src={MeuBichinho} alt="Meu bichinho"/>
                <Title>meu bichinho</Title>
            </Logo>
            <Content>
                <Description>O site para você encontrar seu companheirinho</Description>
            </Content>

            <ButtonContainer>
                <Button>
                <Link to="/map">Entrar</Link>
                </Button>
                <Button>
                <a href="/createNGO">Regitrar ONG</a>
                </Button>
            </ButtonContainer>
        </Container>
    )
}