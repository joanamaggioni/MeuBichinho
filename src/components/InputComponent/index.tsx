import React from 'react';
import { Container, Input, Label } from './styles'

interface IInputComponentProps {
    label: string,
    type: string;
    placeholder?: string;
}

export function InputComponent({label, type, placeholder}: IInputComponentProps){
    console.log(type)
    return (
        <Container>
            <Label>{label}</Label>
            <Input type={type} placeholder={placeholder} area={type}/>
        </Container>
    )
}