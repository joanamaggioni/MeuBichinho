import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { AnimalCard } from '../../components/AnimalCard';
import Dog from '../../assets/doggo.svg';
import Cat from '../../assets/catto.svg';
import { Button, Container, Main, Title } from './styles';

export function CRUDAnimal() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Title>Gerenciamento de animais</Title>
        <AnimalCard image={Dog} name="Doge armadurado" id={1} />
        <AnimalCard image={Cat} name="Gato armadurado" id={1} />
        <AnimalCard image={Dog} name="Doge armadurado" id={1} />
        <AnimalCard image={Cat} name="Gato armadurado" id={1} />
        <AnimalCard image={Dog} name="Doge armadurado" id={1} />
        <Button href="/create/animal">Cadastrar animal</Button>
      </Main>
    </Container>
  );
}
