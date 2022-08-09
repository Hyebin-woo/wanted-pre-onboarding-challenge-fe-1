import React from "react";
import * as S from "./Intro.style";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function IntroPage() {
    const navigate = useNavigate();

    return (
        <>
            <S.Article>
                <S.LogoImg
                    alt="투두로고"
                    src={process.env.PUBLIC_URL + "/images/todo_logo.png"}
                />
                <S.BtnWrap>
                    <Button
                        type="button"
                        bg="#79BCA4"
                        content="이메일 로그인"
                        onClick={() => navigate("/login")}
                    />
                    <Button type="button" bg="transparent" content="회원가입" />
                </S.BtnWrap>
            </S.Article>
        </>
    );
}

export default IntroPage;
