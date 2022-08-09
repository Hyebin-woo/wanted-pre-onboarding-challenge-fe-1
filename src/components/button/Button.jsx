import React from "react";
import { StyleBtn } from "./Button.style";

function Button(props) {
    const { type, onClick, bg, content } = props;

    return (
        <>
            <StyleBtn type={type} bg={bg} onClick={onClick}>
                {content}
            </StyleBtn>
        </>
    );
}

export default Button;
