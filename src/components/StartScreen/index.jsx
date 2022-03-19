import logo from "../../assets/images/logo.png"
import { $StartScreen, $Container, $SiteTittle, $StartButton } from "./style";
import React from "react";

export default function StartScreen({ startRecall }) {


    return (
        <$StartScreen>
            <$Container>
                <img src={logo} alt="logo" />
                <$SiteTittle>ZapRecall</$SiteTittle>
            </$Container>
            <$StartButton onClick={() => startRecall(true)}>Iniciar Recall!</$StartButton>
        </$StartScreen>
    );
}