import styled from "styled-components";

export const $SiteFooter = styled.footer`
    background-color: white;
    min-height: clamp(70px, (0.18 * 100vw) + 2.3px, 118px);
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
        font-size: clamp(18px, (0.053 * 100vw) - 1.7px, 32px);
        color: #333333;
    }

    div {
        display: flex;
    }
`;

export const $RestartButton = styled.button`
    width: 167px;
    height: 32px;
    background: #FB6B6B;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
`;