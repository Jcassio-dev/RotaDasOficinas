import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    padding: 12px;

    background: #00BFA6;
    color: #FFF;

    border: 0;
    border-radius: 10px;

    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    &:disabled{
        opacity: 0.5;
    }
`