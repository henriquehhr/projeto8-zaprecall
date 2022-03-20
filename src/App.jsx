import React from "react";
import StartScreen from "./components/StartScreen/index";
import PlayScreen from "./components/PlayScreen";


export default function App() {

    const [startRecall, setStartRecall] = React.useState(false);
    const [recallGoal, setRecallGoal] = React.useState();
    const [questions, setQuestions] = React.useState();

    const decks = getDecks();

    function startRecallWithGoal(goal, questions) {
        setRecallGoal(goal);
        setStartRecall(true);
        setQuestions(questions);
    }

    if (startRecall)
        return (<PlayScreen questions={questions} startRecall={setStartRecall} recallGoal={recallGoal} decks={decks} />);
    return (<StartScreen startRecallWithGoal={startRecallWithGoal} decks={decks} />);
}

function getDecks() {
    return [
        {
            deckName: "Escolha seu deck",
            deck: []
        },
        {
            deckName: "React",
            deck: [
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
            ].sort(() => Math.random() - 0.5)
        },
        {
            deckName: "Deck pequeno",
            deck: [
                {
                    question: "Pergunta 1",
                    answer: "Resposta 1"
                },
                {
                    question: "Pergunta 2",
                    answer: "Resposta 2"
                },
                {
                    question: "Pergunta 3",
                    answer: "Resposta 3"
                }
            ].sort(() => Math.random() - 0.5)
        }
    ];
}