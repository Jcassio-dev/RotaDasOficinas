import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: #FFF;
    color: #000;

    margin-bottom: 8px;
    border-radius: 10px;

    >input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: #000;
        background: transparent;
        border: 0;
        outline: 0;

        &::placeholder{
            color: gray;
        }
        
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

`