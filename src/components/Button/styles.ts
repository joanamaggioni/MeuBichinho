import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    height: 64px;
    border: 1px solid var(--blue);
    background-color: var(--blue);

    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    border-radius: 20px;

    cursor: pointer;

    :hover {
        filter: brightness(120%)
    }

`;