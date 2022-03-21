import styled from "styled-components";

export const $Flashcard = styled.li`
    width: 100%;
    
    &.card-cover {
        height: clamp(65px, (0.102 * 100vw) + 27px, 92px);
    }

    &.card-uncover {
        min-height: 131px;
    }

    position: relative;
`;

export const $CardCover = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px 0 15px;

    &.forgotten {
        color: #FF3030;
    }
    &.almost {
        color: #FF922E;
    }
    &.zap {
        color: #2FBE34;
    }

    &.forgotten p, &.almost p, &.zap p {
        text-decoration: line-through;
    }

    p {
        font-weight: 700;
        font-size: clamp(16px, (0.03 * 100vw) + 4.7px, 24px);
        //line-height: 19px;
    }
`;

export const $Face = styled.div`
    width: 100%;
    height: 100%;
    background: #FFFFD4;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    position: absolute;
    backface-visibility: hidden;
    transition: all .5s;
    transform-style: preserve-3d;
    padding: 18px 14px 6px 14px;

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    
    &.front {

        img {
            position: absolute;
            bottom: 6px;
            right: 15px;
        }

        ${props => props.fliped ? "transform: rotateY(-180deg);" : ""}
    }

    &.back {
        transform: rotateY(180deg);

        display: grid;
        gap: 7px;
        grid-template-columns: 1fr 1fr 1fr;
        align-content: space-between;

        p {
            grid-column: 1 / 4;
        }

        ${props => props.fliped ? "transform: rotateY(0deg);" : ""}
    }
`;

export const $RecallButton = styled.button`
    width: 100%;
    height: 37px;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;

    &.red {
        background-color: #FF3030;
    }
    &.yellow {
        background-color: #FF922E;
    }
    &.green {
        background-color: #2FBE34;
    }
`;

export const $IconContainer = styled.div`
    ion-icon {
        --ionicon-stroke-width: 50px;
        width: clamp(23px, (0.049 * 100vw) + 4.7px, 36px);
        height: clamp(23px, (0.049 * 100vw) + 4.7px, 36px);
    }
    
    &.forgotten ion-icon {
        color: #FF3030;
    }
    &.almost ion-icon {
        color: #FF922E;
    }
    &.zap ion-icon {
        color: #2FBE34;
    }
`;