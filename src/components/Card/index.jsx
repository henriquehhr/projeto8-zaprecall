import styled from "styled-components";
import React from "react";

export default function Card() {
    const [clicked, setClick] = React.useState(false);

    return (
        <$Card onClick={() => setClick(!clicked)}>
            <$Face className="front" clicked={clicked}>Frente</$Face>
            <$Face className="back" clicked={clicked}>Verso</$Face>
        </$Card>
    );
}

const $Card = styled.div`
    width: 117px;
    height: 146px;
    position: relative;
`;

const $Face = styled.div`
    width: 100%;
    height: 100%;
    background-color: #A7E9AF;
    border-radius: 5px;
    border: 1px solid #99CEA8;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    backface-visibility: hidden;
    transition: all .5s;
    transform-style: preserve-3d;

    &.back {
        transform: rotateY(180deg);
        ${props => props.clicked ? "transform: rotateY(0deg);" : ""}
    }

    &.front {
        ${props => props.clicked ? "transform: rotateY(-180deg);" : ""}
    }
`;