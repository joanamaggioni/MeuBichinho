import React from 'react';
import Logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Button, Container, Content, Img } from './styles';

export function Sidebar() {
    return (
        <Container>
            <Img src={Logo} alt="Meu bichinho"/>

            <Content>
                <Button>
                <FiArrowLeft className="return" size={24} color="rgba(255,255,255,0.7)" />
                </Button>
            </Content>
        </Container>

    )
}