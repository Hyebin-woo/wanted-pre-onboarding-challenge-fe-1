import React from "react";
import * as S from "./Input.style";

function Input(props) {
    const { label, type, value, placeholder, RequiredMessage } = props;
    return (
        <>
            <S.Wrap>
                <S.InputLabel>{label}</S.InputLabel>
                <S.InputData
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    RequiredMessage={RequiredMessage}
                />
            </S.Wrap>
        </>
    );
}

export default Input;
