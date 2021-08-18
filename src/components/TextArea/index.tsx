import React from 'react';
import { Container, TextAreaComponent, Label } from './styles'

interface ITextAreaProps {
    label: string,
    placeholder?: string;
}

export function TextArea({label, placeholder}: ITextAreaProps){
    return (
        <Container>
            <Label>{label}</Label>
            <TextAreaComponent placeholder={placeholder}/>
        </Container>
    )
}