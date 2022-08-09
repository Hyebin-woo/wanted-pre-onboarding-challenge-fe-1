import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./Login.style";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import RequiredMessage from "../../components/required/RequiredMessage";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        resetField,
    } = useForm({
        mode: "onChange",
    });

    return (
        <>
            <S.Article>
                <S.Title>이메일로 로그인</S.Title>
                <S.Form onSubmit={handleSubmit()}>
                    <Input
                        label="이메일"
                        {...register("이메일", {
                            required: "이메일 형식으로 입력하세요(@ .)",
                            validate: {},
                        })}
                        type="email"
                        placeholder="이메일을 입력하세요."
                    />
                    {errors.email?.message}
                    <Input
                        label="비밀번호"
                        register={register("비밀번호", {
                            required: {
                                value: true,
                                message: "*필수 입력 값입니다.",
                            },
                        })}
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        RequiredMessage={RequiredMessage}
                    />
                    {errors.password?.message}
                    <S.WrapBtn>
                        <Button type="submit" content="로그인" bg="#79BCA4" />
                    </S.WrapBtn>
                </S.Form>
            </S.Article>
        </>
    );
}

export default LoginPage;
