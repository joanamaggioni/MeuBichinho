import React from 'react';
import { Button, Card, Container, Content, Logout, Main, Title, Welcome } from './styles'
import { Sidebar } from '../../components/Sidebar';
import { AiOutlinePoweroff } from 'react-icons/ai';
import Animal from '../../assets/manageranimals.svg'
import NGO from '../../assets/managerngo.svg'
import MapImage from '../../assets/map.svg'

export function Manager(){

    // function Logout

    return (
        <Container>
        <Sidebar />
            <Main>
                <Logout>
                <Title>Olá Paula!</Title>
                <Button>Sair <AiOutlinePoweroff size={20}/></Button>
                </Logout>
            <Welcome>Seja bem-vindo (a) de volta!</Welcome>
            <Content>
                <Card>
                    <a href="/animalsList">
                    <img src={Animal} alt="Gerenciar animais" />
                    Gerenciar animais
                    </a>
                </Card>
                <Card>
                    <a href="/manager/NGO">
                    <img src={NGO} alt="Gerenciar ONG" />
                    Gerenciar ONG
                    </a>
                </Card>
                <Card>
                    <a href="/map">
                    <img src={MapImage} alt="Ver mapa" />
                    Ver mapa
                    </a>
                </Card>
            </Content>
            </Main>
        </Container>
    )
}