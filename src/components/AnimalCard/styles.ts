import { darken } from 'polished';
import styled from 'styled-components';

export const Card = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: var(--white);
    border-radius: 5px;
    border: 1px solid var(--secondary);
    text-decoration: none;

    cursor: pointer;

    :hover {
        background: ${darken(0.1, '#fff')};
    }
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
`;

export const Name = styled.h1`
    font-size: 18px;
    color: var(--primary);
`;
