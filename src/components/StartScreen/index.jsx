import logo from "../../assets/images/logo.png"
import { $StartScreen, $Container, $SiteHeader, $StartButton } from "./style";
import React from "react";

export default function StartScreen({ startRecall }) {


    return (
        <$StartScreen>
            <$Container>
                <img src={logo} alt="logo" />
                <$SiteHeader>ZapRecall</$SiteHeader>
            </$Container>
            <$StartButton onClick={() => startRecall(true)}>Iniciar Recall!</$StartButton>
        </$StartScreen>
    );
}