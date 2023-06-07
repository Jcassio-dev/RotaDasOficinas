import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Nav({title, prevPage, nextPage}){
    const navigate = useNavigate();
    return(
        <Container>
            <button onClick={() => navigate(prevPage)}>&#9665;</button>
            <h1>{title}</h1>
            <button onClick={() => navigate(nextPage)}>&#9655;</button>
        </Container>
    )
}