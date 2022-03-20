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
            <$DeckSelection value={questions} onChange={(e) => setQuestions(e.target.value)}>
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
                disabled={parseInt(inputValue) < 1 || inputValue == ""}
                onClick={() => startRecallWithGoal(inputValue, questions)}>
                Iniciar Recall!
            </$StartButton>
        </$StartScreen>
    );
}

/*
function getQuestions() {
    return [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes"
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quando renderizar a tela novamente"
        }
    ].sort(() => Math.random() - 0.5);
}*/