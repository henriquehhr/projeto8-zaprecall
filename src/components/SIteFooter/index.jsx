import React from "react";
import { $SiteFooter } from "./style";

export default function SiteFooter({ answerCount }) {
    const [results, setResults] = React.useState([]);
    const [finalResult, setFinalResult] = React.useState({ title: "", message: "" });

    answerCount.increaseCardsCount = (result) => {
        results.push(result);
        setResults([...results]);

        //if (results.length == 8) {
        //if (results.some(icon => icon.props.className == "forgotten"))
        setFinalResult({ title: "😥 Putz...", message: "Ainda faltam alguns... Mas não desanime!" });
        //else
        //setFinalResult({ title: "🥳 Parabéns!", message: "Você não esqueceu de nenhum flashcard!" });
        //}
    }

    return (
        <$SiteFooter>
            <p>{finalResult.title}</p>
            <p>{finalResult.message}</p>
            <p>{results.length}/8 CONCLUÍDOS</p>
            <div>{results}</div>
        </$SiteFooter>
    );
}