import React, { InputHTMLAttributes } from 'react';
import { Container, InputComponent, Label } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  type: string;
  placeholder?: string;
}

export function Input({ label, type, placeholder, ...rest }: IInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent type={type} placeholder={placeholder} />
    </Container>
  );
}
