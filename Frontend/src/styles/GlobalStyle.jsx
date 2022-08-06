import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
    box-sizing: border-box;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        cursor: pointer;
    }

    img{
        vertical-align: top;
    }
    
    .ir{
        position: absolute; 
        clip: rect(0 0 0 0); 
        width: 1px;
        height: 1px; 
        margin: -1px; 
        overflow: hidden;
    }
`;
export default GlobalStyle;
