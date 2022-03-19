import React from "react";
import { $Flashcard, $CardCover, $Face, $RecallButton } from "./style";
import flipCard from "../../assets/images/setinha.png";

export default function Flashcard({ questionNumber, question, answer, answerCount }) {
    const [cover, setCover] = React.useState(true);
    const [fliped, setFliped] = React.useState(false);
    const [result, setResult] = React.useState("");

    function answerCard(result) {
        setCover(true);
        setResult(result);
        answerCount.increaseCardsCount();
    }

    if (cover) {
        let icon;
        switch (result) {
            case "forgotten":
                icon = <ion-icon name="close-circle"></ion-icon>;
                break;
            case "almost":
                icon = <ion-icon name="help-circle"></ion-icon>;
                break;
            case "zap":
                icon = <ion-icon name="checkmark-circle"></ion-icon>;
                break;
            default:
                icon = <ion-icon name="play-outline" onClick={() => setCover(false)}></ion-icon>;
        }

        return (
            <$Flashcard className="card-cover">
                <$CardCover className={result}>
                    <p>Pergunta {questionNumber}</p>
                    {icon}
                </$CardCover>
            </$Flashcard>
        );
    }

    return (
        <$Flashcard className="card-uncover">
            <$Face className="front" fliped={fliped}>
                <p>{question}</p>
                <img src={flipCard} alt="flip card" onClick={() => setFliped(true)} />
            </$Face>
            <$Face className="back" fliped={fliped}>
                <p>{answer}</p>
                <$RecallButton className="red" onClick={() => answerCard("forgotten")}>
                    Não lembrei
                </$RecallButton>
                <$RecallButton className="yellow" onClick={() => answerCard("almost")}>
                    Quase não lembrei
                </$RecallButton>
                <$RecallButton className="green" onClick={() => answerCard("zap")}>
                    Zap!
                </$RecallButton>
            </$Face>
        </$Flashcard>
    );
}