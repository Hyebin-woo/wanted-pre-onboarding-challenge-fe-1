import styled from "styled-components";

export const StyleBtn = styled.button`
    padding: 15px 10px;
    margin: 10px 0;
    width: 100%;
    font-size: 1.9rem;
    text-align: center;
    color: #fff;
    background-color: ${(props) => props.bg};
    border: 4px solid ${(props) => (props.bg == "#79BCA4" ? "none" : "#79BCA4")};
    outline: none;
    border-radius: 15px;
    cursor: pointer;
`;
