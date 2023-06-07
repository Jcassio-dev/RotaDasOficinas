import { styled } from "styled-components";

export const Container = styled.div`
    padding: 20px;

    margin: 50px auto;

    width: clamp(300px, 100%, 700px);

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 24px;
        text-align: center;
    }
    h3{
        text-align: center;
    }

    .input-wrapper{
        width: 100%;

        display: grid;
        grid-template-columns: 70% 20%;
        justify-content: center;

        gap: 10px;
    }

    .col-4{
        grid-template-columns: 10% 33% 23% 20%;
        gap: 12px;
    }

    ul{
        list-style: none;
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }

    .foods{
        flex-direction: column;
    }

    li{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .remove{
        border: none;
        background: none;
        color: red;
    }


`