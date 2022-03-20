import React from "react";
import { $SiteFooter, $RestartButton } from "./style";

export default function SiteFooter({ answerCount, startRecall, recallGoal }) {
    const [results, setResults] = React.useState([]);
    const [finalResult, setFinalResult] = React.useState({ title: "", message: "" });

    answerCount.increaseCardsCount = (result) => {
        results.push(result);
        setResults([...results]);

        if (results.length == 8) {
            let zapCount = 0;
            for (let result of results) {
                if (result.props.className == "forgotten") {
                    setFinalResult({ title: "😥 Putz...", message: "Ainda faltam alguns... Mas não desanime!" });
                    return;
                } else if (result.props.className == "zap") {
                    zapCount++;
                }
            }
            console.log("Zap count: " + zapCount);
            console.log("Recall goal: " + recallGoal);
            if (zapCount >= recallGoal)
                setFinalResult({ title: "🥳 Parabéns!", message: "Você não esqueceu de nenhum flashcard!" });
            else
                setFinalResult({ title: "😥 Putz...", message: "Ainda faltam alguns... Mas não desanime!" });
            /*if (results.some(icon => icon.props.className == "forgotten"))
                setFinalResult({ title: "😥 Putz...", message: "Ainda faltam alguns... Mas não desanime!" });
            else
                setFinalResult({ title: "🥳 Parabéns!", message: "Você não esqueceu de nenhum flashcard!" });*/
        }
    }

    return (
        <$SiteFooter>
            <p>{finalResult.title}</p>
            <p>{finalResult.message}</p>
            <p>{results.length}/8 CONCLUÍDOS</p>
            <div>{results}</div>
            {
                finalResult.title ? <$RestartButton onClick={() => startRecall(false)}>REINICIAR RECALL</$RestartButton> : < ></>
            }
        </$SiteFooter>
    );
}