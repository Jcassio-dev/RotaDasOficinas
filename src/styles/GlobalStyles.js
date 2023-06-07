import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}   

body{
        color: #FFF;
        background: #2C2B3D;
    }

body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
}

button, a{
    cursor: pointer;
    transition: 0.3s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}
`