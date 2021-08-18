import React from 'react';
import { Container, InputComponent, Label } from './styles'

interface IInputProps {
    label: string,
    type: string;
    placeholder?: string;
}

export function Input({label, type, placeholder}: IInputProps){
    console.log(type)
    return (
        <Container>
            <Label>{label}</Label>
            <InputComponent type={type} placeholder={placeholder}/>
        </Container>
    )
}