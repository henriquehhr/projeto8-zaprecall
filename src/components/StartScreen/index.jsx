import logo from "../../assets/images/logo.png"
import { $StartScreen, $Container, $SiteTittle, $DeckSelection, $GoalInput, $StartButton } from "./style";
import React from "react";

export default function StartScreen({ startRecallWithGoal, decks }) {

    const [inputValue, setInputValue] = React.useState("");
    const [questions, setQuestions] = React.useState("Escolha seu deck");

    return (
        <$StartScreen>
            <$Container>
                <img src={logo} alt="logo" />
                <$SiteTittle>ZapRecall</$SiteTittle>
            </$Container>
            <$DeckSelection
                className={questions == "Escolha seu deck" ? "placeholder" : ""}
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}>
                {
                    decks.map(deck => {
                        if (deck.deckName == "Escolha seu deck")
                            return <option disabled key={deck.deckName} value={deck.deckName}>{deck.deckName}</option>
                        return <option key={deck.deckName} value={deck.deckName}>{deck.deckName}</option>
                    })
                }
            </$DeckSelection>
            <$GoalInput
                type="number"
                placeholder="Digite sua meta de zaps..."
                onInput={e => setInputValue(e.target.value)}
                className={parseInt(inputValue) >= 1 ? "input-filled" : ""}
            />
            <$StartButton
                disabled={parseInt(inputValue) < 1 || inputValue == "" || questions == "Escolha seu deck"}
                onClick={() => startRecallWithGoal(inputValue, questions)}>
                Iniciar Recall!
            </$StartButton>
        </$StartScreen>
    );
}