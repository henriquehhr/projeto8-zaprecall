import styled from "styled-components";

export const $StartScreen = styled.section`
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 100vh;
`;

export const $SiteTittle = styled.h1`
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
`;

export const $Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 136px;
        height: 161px;
    }
`;

export const $GoalInput = styled.input`
    width: 246px;
    height: 43px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    ::placeholder {
        color: #ADADAD;
    }
`;

export const $StartButton = styled.button`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #D70900;

    :disabled {
        box-shadow: none;
        border: none;
        background: #E8E8E8;
        color: #C0C0C0;
    }
`;