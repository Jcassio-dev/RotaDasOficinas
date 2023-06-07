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
    }

    .resultado{
        margin-top: 15px;
        text-align: center;
        span{
            color: #00BFA6;
            font-size: 36px;
        }
    }


`