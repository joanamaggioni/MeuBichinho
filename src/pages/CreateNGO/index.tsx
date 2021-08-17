import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { InputComponent } from '../../components/InputComponent';
import { Button } from '../../components/Button';
import { Container, Content, Form, Title } from './styles';

export function CreateNGO(){
    return (
        <Container>
            <Sidebar />
            <Content>
                <Form>
                <Title>Registre sua ONG</Title>
                    <InputComponent label="Nome da ONG" type="text"/>
                    <InputComponent label="Email" type="text"/>
                    <InputComponent label="Escolha uma senha" type="password"/>
                    <InputComponent label="Confirme sua senha" type="password"/>
                    <InputComponent label="Nome do responsável" type="text"/>
                    <InputComponent label="Telefone" type="text"/>
                    <InputComponent label="Sobre a ONG" type="textarea"/>
                    <InputComponent label="Endereço" type="text"/>

                    <Button />
                </Form>
            </Content>
        </Container>
    )
}