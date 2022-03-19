import React from "react"
import { $PlayScreen, $SiteHeader, $SiteTittle, $Questions, $SiteFooter } from "./style";
import logo from "../../assets/images/logo-pequeno.png";
import Flashcard from "../Flashcard";
import SiteFooter from "../SIteFooter";

export default function PlayScreen({ startRecall }) {

    const questions = getQuestions();
    const answerCount = {};

    return (
        <$PlayScreen>
            <$SiteHeader>
                <img src={logo} alt="logo" />
                <$SiteTittle>ZapRecall</$SiteTittle>
            </$SiteHeader>
            <main>
                <$Questions>
                    {questions.map((question, i) => <Flashcard
                        key={question.question}
                        questionNumber={i + 1}
                        question={question.question}
                        answer={question.answer}
                        answerCount={answerCount}
                    />)}
                </$Questions>
            </main>
            <SiteFooter answerCount={answerCount} startRecall={startRecall} />
        </$PlayScreen>
    );
}

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
}