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
    font-size: 25px;
    line-height: 31px;
    color: #FFFFFF;
`;

export const $Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const $StartButton = styled.button`
    width: 141px;
    height: 31px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #D70900;
`;