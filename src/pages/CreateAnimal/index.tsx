import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { Container, Form, Title } from './styles';

export function CreateAnimal() {
  return (
    <Container>
      <Sidebar />
      <Form>
        <Title>Registre um bichinho</Title>
        <Input label="Nome do bichinho" type="text" />
        <Input label="Endereço" type="text" />
        <Input label="Idade" type="text" />
        <Input label="Possui alguma necessidade especial?" type="text" />
        <Input label="Espécie" type="text" />
        <TextArea label="Sobre o bichinho - máximo de 300 caracteres" />
        <Input label="Telefone para contato" type="text" />
        <Button text="Registrar" />
      </Form>
    </Container>
  );
}
