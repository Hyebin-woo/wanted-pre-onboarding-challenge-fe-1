import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-size: 10px;
    }

    * {
    box-sizing: border-box;
    }

    a{
        text-decoration : none;
        color : inherit;
    }
    
    input{
        border: none;
        outline:none;
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
