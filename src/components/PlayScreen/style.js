import styled from "styled-components";

export const $PlayScreen = styled.section`
    background-color: #FB6B6B;
    min-height: 100vh;
    max-height: fit-content;
    padding: 85px 37px;
`;

export const $SiteHeader = styled.header`
    background: rgb(251,107,107);
    background: linear-gradient(180deg,
        rgba(251,107,107,1) 0%,
        rgba(251,107,107,1) 85%,
        rgba(251,107,107,0) 100%);
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
    font-size: clamp(36px, (100vw * 0.105) - 3.5px, 64px);
    line-height: 45px;
    color: #FFFFFF;
`;

export const $Questions = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 567px;
    margin: 0 auto;
`;