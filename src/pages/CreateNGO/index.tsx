import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { Container, Content, Form, Title } from './styles';

export function CreateNGO() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Form>
          <Title>Registre sua ONG</Title>
          <Input label="Nome da ONG" type="text" />
          <Input label="Email" type="text" />
          <Input label="Escolha uma senha" type="password" />
          <Input label="Confirme sua senha" type="password" />
          <Input label="Nome do responsável" type="text" />
          <Input label="Telefone" type="text" />
          <TextArea label="Sobre a ONG - máximo de 300 caracteres" />
          <Input label="Endereço" type="text" />

          <Button text="Registrar"/>
        </Form>
      </Content>
    </Container>
  );
}
