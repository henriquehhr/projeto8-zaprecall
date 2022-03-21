import React from "react"
import { $PlayScreen, $SiteHeader, $SiteTittle, $Questions, $SiteFooter } from "./style";
import logo from "../../assets/images/logo-medio.png";
import Flashcard from "../Flashcard";
import SiteFooter from "../SIteFooter";

export default function PlayScreen({ questions, startRecall, recallGoal, decks }) {

    const answerCount = {};
    let question2;
    for (let deck of decks) {
        if (deck.deckName == questions) {
            question2 = deck.deck;
            break;
        }

    }

    return (
        <$PlayScreen>
            <$SiteHeader>
                <img src={logo} alt="logo" />
                <$SiteTittle>ZapRecall</$SiteTittle>
            </$SiteHeader>
            <main>
                <$Questions>
                    {question2.map((question, i) => <Flashcard
                        key={question.question}
                        questionNumber={i + 1}
                        question={question.question}
                        answer={question.answer}
                        answerCount={answerCount}
                    />)}
                </$Questions>
            </main>
            <SiteFooter answerCount={answerCount} startRecall={startRecall} recallGoal={recallGoal} deckSize={question2.length} />
        </$PlayScreen>
    );
}