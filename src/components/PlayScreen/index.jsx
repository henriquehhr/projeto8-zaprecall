import React from "react"
import { $PlayScreen, $SiteHeader, $SiteTittle, $Questions, $SiteFooter } from "./style";
import logo from "../../assets/images/logo-pequeno.png";
import Flashcard from "../Flashcard";
import SiteFooter from "../SIteFooter";

export default function PlayScreen() {

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
            <SiteFooter answerCount={answerCount} />
        </$PlayScreen>
    );
}

function getQuestions() {
    return [
        {
            question: "1",
            answer: "A1"
        },
        {
            question: "2",
            answer: "A2"
        },
        {
            question: "3",
            answer: "A3"
        },
        {
            question: "4",
            answer: "A4"
        },
        {
            question: "5",
            answer: "A5"
        },
        {
            question: "6",
            answer: "A6"
        },
        {
            question: "7",
            answer: "A7"
        },
        {
            question: "8",
            answer: "A8"
        }
    ].sort(() => Math.random() - 0.5);
}