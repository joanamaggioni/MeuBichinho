import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Sidebar } from '../../components/Sidebar';
import { TextArea } from '../../components/TextArea';

import { Container, Content, Form, Title } from './styles';

export function CreateAnimal(){
    return (
        <Container>
      <Sidebar />
      <Content>
        <Form>
          <Title>Dados</Title>
          <Input label="Endereço" type="text" />
          <Input label="Nome do bichinho" type="text" />
          <TextArea label="Sobre" />
          <Input label="Número de Whatsapp" type="text" />
          <Input label="Fotos" type="password" />
          <Title>Visitação</Title>
          <TextArea label="Instruções" />
          <Input label="Horário das visitas" type="text" />
          <Button />
        </Form>
      </Content>
    </Container>
    )
}