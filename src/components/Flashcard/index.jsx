import React from "react";
import { $Flashcard, $CardCover, $Face, $RecallButton, $IconContainer } from "./style";
import flipCard from "../../assets/images/setinha.png";

export default function Flashcard({ questionNumber, question, answer, answerCount }) {
    const [cover, setCover] = React.useState(true);
    const [fliped, setFliped] = React.useState(false);
    const [result, setResult] = React.useState("");

    function answerCard(result) {
        setCover(true);
        setResult(result);
        answerCount.increaseCardsCount(getIcon(result));
    }

    function getIcon(result) {
        const iconMap = {
            forgotten: "close-circle",
            almost: "help-circle",
            zap: "checkmark-circle"
        };
        let icon;

        if (result) {
            icon = <$IconContainer className={result} key={questionNumber}>
                <ion-icon name={iconMap[result]}></ion-icon>
            </$IconContainer>;
        } else {
            icon = <$IconContainer>
                <ion-icon name="play-outline" onClick={() => setCover(false)}></ion-icon>
            </$IconContainer>;
        }
        return icon;
    }

    return (
        <$Flashcard className={cover ? "card-cover" : "card-uncover"}>
            {cover &&
                <$CardCover className={result}>
                    <p>Pergunta {questionNumber}</p>
                    {getIcon(result)}
                </$CardCover>
            }
            {!cover && < >
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
                </$Face> </>
            }
        </$Flashcard>
    );
}