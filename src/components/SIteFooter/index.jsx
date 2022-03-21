import React from "react";
import { $SiteFooter, $RestartButton } from "./style";

export default function SiteFooter({ answerCount, startRecall, recallGoal, deckSize }) {
    const [results, setResults] = React.useState([]);
    const [finalResult, setFinalResult] = React.useState({ title: "", message: "" });

    answerCount.increaseCardsCount = (result) => {
        results.push(result);
        setResults([...results]);

        if (results.length == deckSize) {
            let zapCount = 0;
            for (let result of results) {
                if (result.props.className == "zap") {
                    zapCount++;
                }
            }
            if (zapCount >= recallGoal)
                setFinalResult({ title: "🥳 Parabéns!", message: "Você não esqueceu de nenhum flashcard!" });
            else
                setFinalResult({ title: "😥 Putz...", message: "Ainda faltam alguns... Mas não desanime!" });
        }
    }

    return (
        <$SiteFooter>
            <p>{finalResult.title}</p>
            <p>{finalResult.message}</p>
            <p>{results.length}/{deckSize} CONCLUÍDOS</p>
            <div>{results}</div>
            {
                finalResult.title ? <$RestartButton onClick={() => startRecall(false)}>REINICIAR RECALL</$RestartButton> : < ></>
            }
        </$SiteFooter>
    );
}