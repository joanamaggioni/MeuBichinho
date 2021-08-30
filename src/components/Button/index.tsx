import React from 'react';
import { Container } from './styles';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement>{
  text: string;
}

export function Button({ text }: IButtonProps) {
  return (<Container>{text}</Container>)
}
