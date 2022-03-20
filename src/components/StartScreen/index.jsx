import logo from "../../assets/images/logo.png"
import { $StartScreen, $Container, $SiteTittle, $GoalInput, $StartButton } from "./style";
import React from "react";

export default function StartScreen({ startRecallWithGoal }) {

    const [inputValue, setInputValue] = React.useState("");

    return (
        <$StartScreen>
            <$Container>
                <img src={logo} alt="logo" />
                <$SiteTittle>ZapRecall</$SiteTittle>
            </$Container>
            <$GoalInput
                type="number"
                placeholder="Digite sua meta de zaps..."
                onInput={e => setInputValue(e.target.value)}
            />
            <$StartButton
                disabled={inputValue === ""}
                onClick={() => startRecallWithGoal(inputValue)}>
                Iniciar Recall!
            </$StartButton>
        </$StartScreen>
    );
}