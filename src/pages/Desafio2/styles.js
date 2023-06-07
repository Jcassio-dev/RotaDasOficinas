import { styled } from "styled-components";


export const Container = styled.div`
    padding: 20px;

    margin: 50px auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    .controls{
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
    }
    .game{
        display: flex;
        flex-wrap: wrap;

        width: 300px;
        height: 300px;
    }

    h1{
       font-size: 24px;
    }
    h2{
        text-align: center;

        span{
            color: #00BFA6;
            font-size: 36px;
        }
    }
`

export const Cell = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    border: 1px solid #FFF;
`