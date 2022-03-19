import styled from "styled-components";

export const $PlayScreen = styled.section`
    background-color: #FB6B6B;
    height: 100vh;
    padding: 75px 37px;
`;

export const $SiteHeader = styled.header`
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    gap: 10px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    padding: 19px;
`;

export const $SiteTittle = styled.h1`
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
    color: #FFFFFF;
`;

export const $Questions = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const $SiteFooter = styled.footer`
    background-color: white;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
`;