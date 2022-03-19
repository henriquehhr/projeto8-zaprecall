import styled from "styled-components";

export const $SiteFooter = styled.footer`
    background-color: white;
    min-height: 70px;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    padding: 7px 0;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    p {
        font-family: Recursive;
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    }

    div {
        display: flex;
    }
`;